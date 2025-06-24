import {
  chartColorPalette,
  hiddenPropertyView,
  jsonControl,
  Section,
  ThemeContext,
  toObject,
  UICompBuilder,
} from "lowcoder-sdk";
import * as echarts from "echarts";
import { EChartsType } from "echarts";
import { useContext, useEffect, useRef, useState } from "react";
import log from "loglevel";
import { useResizeDetector } from "react-resize-detector";
import { trans } from "i18n";

const defaultEchartsJsonOption = {
  backgroundColor: "#eff6ff",
  title: {
    text: "Thống kê giường bệnh cơ sở",
    top: 10,
    left: "center",
    textStyle: {
      fontFamily: "sans-serif",
      fontSize: "18px",
      width: 380,
      overflow: "break",
      fontWeight: 600,
    },
  },
  tooltip: {
    trigger: "axis",
    confine: true,
    className: "tool-tip-container",
    axisPointer: {
      type: "shadow",
    },
  },
  legend: {
    left: "left",
    top: "40",
    itemWidth: 14,
    itemHeight: 14,
    itemGap: 30,
    show: true,
    textStyle: {
      fontSize: 12,
      fontFamily: "sans-serif",
    },
  },
  grid: {
    top: "25%",
    left: 110,
    right: "5%",
    bottom: "3%",
    containLabel: false,
  },
  xAxis: {
    type: "value",
    axisLabel: {
      formatter: "",
    },
  },
  yAxis: {
    type: "category",
    inverse: true,
    data: [
      {
        value: "Bệnh viện Đà Nẵng",
      },
      {
        value: "Bệnh viện Phụ Sản – Nhi",
      },
      {
        value: "Bệnh viện Ung bướu Đà Nẵng",
      },
      {
        value: "Bệnh viện Y học cổ truyền",
      },
      {
        value: "Bệnh viện Tâm Thần",
      },
      {
        value: "Bệnh viện Mắt",
      },
      {
        value: "Bệnh viện Đa khoa Nam Liên Chiểu",
      },
      {
        value: "Bệnh viện Phục hồi chức năng",
      },
      {
        value: "Bệnh viện Phổi",
      },
      {
        value: "Bệnh viện Da Liễu",
      },
      {
        value: "Bệnh viện Răng Hàm Mặt",
      },
      {
        value: "Trung tâm Kiểm soát bệnh tật",
      },
    ],
    axisLabel: {
      interval: 0,
      hideOverLap: true,
      overflow: "break",
      width: 100,
      align: "left",
      margin: 100,
      textStyle: {
        fontFamily: "sans-serif",
        lineHeight: 18,
        whiteSpace: "pre-wrap",
        color: "#000000",
      },
    },
    show: true,
  },
  dataZoom: [
    {
      show: true,
      type: "slider",
      yAxisIndex: 0,
      start: 0,
      end: 30,
      width: 5,
      backgroundColor: "rgba(0, 0, 0, 0.1)",
      fillerColor: "rgba(0, 0, 0, 0.25)",
      handleSize: "0%",
      handleStyle: {
        color: "rgba(0, 0, 0, 0)",
        borderColor: "rgba(0, 0, 0, 0)",
      },
      textStyle: {
        opacity: 0,
      },
      zoomLock: true,
    },
    {
      type: "inside",
      yAxisIndex: 0,
      zoomLock: true,
    },
  ],
  series: [
    {
      name: "Kế hoạch",
      type: "bar",
      stack: "total",
      color: "#23C847",
      labelLayout: {
        hideOverlap: true,
      },
      label: {
        show: false,
      },
      emphasis: {
        focus: "series",
      },
      data: [
        {
          value: 2000,
        },
        {
          value: 1250,
        },
        {
          value: 650,
        },
        {
          value: 300,
        },
        {
          value: 200,
        },
        {
          value: 180,
        },
        {
          value: 180,
        },
        {
          value: 150,
        },
        {
          value: 130,
        },
        {
          value: 100,
        },
        {
          value: 30,
        },
        {
          value: null,
        },
      ],
    },
    {
      name: "Thực tế",
      type: "bar",
      stack: "total",
      color: "#F3BC2F",
      labelLayout: {
        hideOverlap: true,
      },
      label: {
        show: false,
      },
      emphasis: {
        focus: "series",
      },
      data: [
        {
          value: 2691,
        },
        {
          value: 1802,
        },
        {
          value: 970,
        },
        {
          value: 360,
        },
        {
          value: 240,
        },
        {
          value: 250,
        },
        {
          value: 192,
        },
        {
          value: 180,
        },
        {
          value: 150,
        },
        {
          value: 132,
        },
        {
          value: null,
        },
        {
          value: null,
        },
      ],
    },
  ],
  graphic: [
    {
      type: "text",
      left: "center",
      top: "middle",
      z: 100,
      style: {
        text: "",
        fontSize: 15,
        fill: "#222222",
      },
    },
  ],
};

let chartJsonModeChildren = {
  echartsOption: jsonControl(toObject, defaultEchartsJsonOption),
};

let ChartTmpComp = new UICompBuilder(chartJsonModeChildren, (props) => {
  const [echartsCompRef, setEchartsCompRef] = useState<EChartsType | null>();
  const containerRef = useRef<HTMLDivElement>(null);
  const theme = useContext(ThemeContext);
  const defaultChartTheme = {
    color: chartColorPalette,
    backgroundColor: "#fff",
  };

  let themeConfig = defaultChartTheme;
  try {
    themeConfig = theme?.theme?.chart ? JSON.parse(theme?.theme.chart) : defaultChartTheme;
  } catch (error) {
    log.error("theme chart error: ", error);
  }

  useResizeDetector({
    targetRef: containerRef,
    onResize: () => {
      echartsCompRef?.resize?.();
    },
  });

  useEffect(() => {
    if (!echartsCompRef) {
      setEchartsCompRef(
        echarts.init(containerRef.current, themeConfig, {
          renderer: "svg",
          locale: "vi",
        })
      );
    } else {
      echartsCompRef.dispose();
      setEchartsCompRef(
        echarts.init(containerRef.current, themeConfig, {
          renderer: "svg",
          locale: "vi",
        })
      );
    }
  }, [JSON.stringify(themeConfig)]);

  useEffect(() => {
    if (!echartsCompRef) return;

    echartsCompRef.setOption(props.echartsOption, {
      lazyUpdate: true,
    });
  }, [echartsCompRef, JSON.stringify(props.echartsOption)]);

  return <div ref={containerRef} style={{ height: "100%" }}></div>;
})
  .setPropertyViewFn((children) => (
    <>
      <Section name={trans("chart.config")}>
        {children.echartsOption.propertyView({
          label: trans("chart.echartsOptionLabel"),
          styleName: "higher",
        })}
        {hiddenPropertyView(children)}
      </Section>
    </>
  ))
  .build();

class EchartsComp extends ChartTmpComp {
  override autoHeight(): boolean {
    return false;
  }
}

export default EchartsComp;
