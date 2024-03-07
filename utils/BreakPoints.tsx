import { Grid } from "antd";

// Import Constants
const { useBreakpoint } = Grid;

const useAntdBreakPoints = () => {
  const screens = useBreakpoint();
  const xs = Boolean(screens.xs === true);
  const sm = Boolean(screens.sm === true && screens.md === false);
  const md = Boolean(screens.md === true && screens.lg === false);
  const lg = Boolean(screens.lg === true && screens.xl === false);
  const xl = Boolean(screens.xl === true && screens.xxl === false);
  const xxl = Boolean(screens.xxl === true);
  return { xs, sm, md, lg, xl, xxl };
};

export { useAntdBreakPoints };
