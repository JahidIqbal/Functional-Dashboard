import React from "react";
import {
  AccumulationChartComponent,
  AccumulationSeriesCollectionDirective,
  AccumulationSeriesDirective,
  Inject,
  AccumulationLegend,
  AccumulationDataLabel,
  AccumulationTooltip,
  PieSeries,
  AccumulationSelection,
} from "@syncfusion/ej2-react-charts";

import { pieChartData } from "../../data/dummy";
import { useStateContext } from "../../contexts/ContextProvider";
import { ChartsHeader } from "../../components";

const Pie = ({ id, data, legendVisiblity, height }) => {
  const { currentMode } = useStateContext();

  return (
    <div className="m-4 md:m-10 mt-24  p-10 bg-white dark:bg-secondary-dark-bg rounded-3xl">
      <ChartsHeader category="Pie" title="Project Cost Breakdown" />
      <div className="w-full">
        <AccumulationChartComponent
          id={id}
          legendSettings={{ visible: legendVisiblity, background: "white" }}
          height={height}
          background={currentMode === "Dark" ? "#33373E" : "#fff"}
          tooltip={{ enable: true }}
        >
          <Inject
            services={[AccumulationLegend, PieSeries, AccumulationDataLabel]}
          />
          <Inject
            services={[
              AccumulationDataLabel,
              AccumulationTooltip,
              PieSeries,
              AccumulationLegend,
              AccumulationSelection,
            ]}
          />
          <AccumulationSeriesCollectionDirective>
            <AccumulationSeriesDirective
              name="Food"
              dataSource={pieChartData}
              xName="x"
              yName="y"
              type="Pyramid"
              width="45%"
              height="80%"
              neckWidth="15%"
              gapRatio={0.03}
              explode
              emptyPointSettings={{ mode: "Drop", fill: "red" }}
              dataLabel={{
                visible: true,
                position: "Inside",
                name: "text",
              }}
            />
          </AccumulationSeriesCollectionDirective>{" "}
          <Inject
            services={[AccumulationLegend, PieSeries, AccumulationDataLabel]}
          />
          <AccumulationSeriesCollectionDirective>
            <AccumulationSeriesDirective
              name="Project"
              dataSource={pieChartData}
              xName="x"
              yName="y"
              innerRadius="40%"
              startAngle={0}
              endAngle={360}
              radius="70%"
              explode={true}
              explodeOffset="10%"
              explodeIndex={3}
              dataLabel={{
                visible: true,
                name: "text",
                position: "Inside",
                font: {
                  fontWeight: "600",
                  color: "#ffffff",
                },
              }}
            ></AccumulationSeriesDirective>
          </AccumulationSeriesCollectionDirective>
        </AccumulationChartComponent>
      </div>
    </div>
  );
};

export default Pie;
