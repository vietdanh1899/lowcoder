import * as echarts from "echarts";
import "echarts-wordcloud";
import { EChartsReactProps, EChartsInstance, EChartsOptionWithMap } from "./types";
import EChartsReactCore from "./core";
import {memo} from "react";

/**
 * reference: https://github.com/hustcc/echarts-for-react
 * add exception-catch for setOption
 * if query isn't successfully loaded, chart will fail to load and can't reload
 */
export type { EChartsReactProps, EChartsOptionWithMap, EChartsInstance };

// export the Component the echarts Object.
const EChartsReact = memo(EChartsReactCore)

export default EChartsReact;
