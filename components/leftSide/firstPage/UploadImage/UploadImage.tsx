import React, { useState } from "react";
import { PlusOutlined } from "@ant-design/icons";
import { Button, ConfigProvider, Image, Modal, Upload } from "antd";
import type { GetProp, UploadFile, UploadProps } from "antd";
import { useDispatch } from "react-redux";
import { imageData } from "../../../../redux/slices/imageSlice";
import axios from "axios";
import { API } from "../../../../app.config";
import { setOcrData } from "../../../../redux/slices/ocrSlice";

type FileType = Parameters<GetProp<UploadProps, "beforeUpload">>[0];

const getBase64 = (file: FileType): Promise<string> =>
  new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result as string);
    reader.onerror = (error) => reject(error);
  });

const UploadImage = () => {
  const dispatch = useDispatch<any>();

  // Declare formData
  let formData = new FormData();
  // const getOcrFiles = useSelector((state: any) => state.ocr.ocrData);

  // const handleClick = () => {
  //   dispatch(getOcrData("city", "loan", "true"));
  // };
  const [previewOpen, setPreviewOpen] = useState(false);
  const [previewImage, setPreviewImage] = useState("");
  const [previewTitle, setPreviewTitle] = useState("");
  const [fileList, setFileList] = useState<UploadFile[]>([]);

  // const [files, setFiles] = useState<string[]>([]);
  const handleCancel = () => setPreviewOpen(false);

  const handlePreview = async (file: UploadFile) => {
    if (!file.url && !file.preview) {
      file.preview = await getBase64(file.originFileObj as FileType);
    }

    setPreviewImage(file.url || (file.preview as string));
    setPreviewOpen(true);
    setPreviewTitle(
      file.name || file.url!.substring(file.url!.lastIndexOf("/") + 1)
    );
  };

  const handleChange: UploadProps["onChange"] = async ({
    fileList: newFileList,
  }) => {
    const promises = newFileList.map(async (newFile) => {
      if (!newFile.url && !newFile.preview) {
        newFile.preview = await getBase64(newFile.originFileObj as FileType);
      }
      return newFile.url || (newFile.preview as string);
    });

    const newFiles = await Promise.all(promises);
    dispatch(imageData(newFiles));
    setFileList(newFileList);
  };
  const handleSubmit = () => {
    if (fileList.length === 0) {
      // Handle the case where no file is selected
      console.log("Please select a file");
      return;
    }

    // Append selected `file` to FormData
    fileList.forEach((file) => {
      //@ts-ignore
      formData.append("file", file.originFileObj);
    });
    formData.append("bank_name", "city");
    formData.append("type", "loan");
    formData.append("pad", "true");
    axios
      .post(API.OCR_API, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then((res) => {
        // Rearrange the array
        const rearrangedArray = res.data.results.sort((a: any, b: any) => {
          if (a.tables.length === 0) {
            return -1; // `a` comes before `b`
          } else if (b.tables.length === 0) {
            return 1; // `b` comes before `a`
          } else {
            return 0; // Keep the order unchanged
          }
        });

        // console.log(rearrangedArray, "faiaz");
        dispatch(setOcrData(rearrangedArray));
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        console.log("e");
      });
  };

  const uploadButton = (
    <button
      style={{
        border: 0,
        background: "none",
      }}
      type="button"
    >
      <PlusOutlined />
      <div style={{ marginTop: 8 }}>Upload</div>
    </button>
  );
  return (
    <>
      <Upload
        // style={{ height: "2000px", width: "2000px" }}
        // action="https://run.mocky.io/v3/435e224c-44fb-4773-9faf-380c5e6a2188"
        // style={{ background: "red" }}
        listType="picture-card"
        fileList={fileList}
        onPreview={handlePreview}
        onChange={handleChange}
      >
        {fileList.length >= 8 ? null : uploadButton}
      </Upload>
      {fileList.length > 0 && (
        <ConfigProvider
          theme={{
            components: {
              Button: {
                defaultBg: "#C5EBAA",
                defaultHoverBg: "#D5F0C1",
                defaultHoverColor: "black",
                defaultHoverBorderColor: "#C5EBAA",
                /* here is your component tokens */
              },
            },
          }}
        >
          <Button
            style={{ marginBottom: "20px", width: "104px" }}
            onClick={handleSubmit}
          >
            Submit
          </Button>
        </ConfigProvider>
      )}
      <Modal
        open={previewOpen}
        title={previewTitle}
        footer={null}
        onCancel={handleCancel}
      >
        <Image alt="example" style={{ width: "100%" }} src={previewImage} />
      </Modal>
    </>
  );
};

export default UploadImage;
