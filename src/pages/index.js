import Head from "next/head";
import Image from "next/image";
import { useState } from "react";
import Input from "../Components/Input.jsx";
import LineChart from "../Components/LineChart.jsx";
import DoughnutChart from "@/Components/DoughnutChart.jsx";
import CollapsibleBox from "@/Components/CollapsibleBox.jsx";
import RelatedCalculator from "@/Components/RelatedCalculator.jsx";
import styles from '@/styles/Home.module.css'

import { FaChartPie} from "react-icons/fa";
import { MdOutlineShowChart } from "react-icons/md";
import {VscCircleFilled} from "react-icons/vsc";

export default function Home() {

  const [yearlyInvestment,setYearlyInvestment]=useState(10000);
  const [age, setAge] = useState(10);

  const [maturityValue,setMaturityValue]=useState(225000);
  const [maturityAge,setMaturityAge]=useState(2045);
  const [totalInvestment,setTotalInvestment]=useState(150000);
  const [totalInterest,setTotalInterest]=useState(75000);
  const [years,setYears]=useState(2035);

  const [isLineChart, setCheck] = useState(true);
  const [graphPoints, setGraphPoints] = useState([
    10000, 10760,22338,62000,123480 ,150000
  ]);

  function calculate() {

    setTotalInvestment(15*yearlyInvestment);
    setMaturityAge(2044);

    let balanceYear=0;
    let interest=0;
    let cumulativeInterest=0;
    let cumulativeBalance=0;

    let points=[]

    for(let i=1;i<=15;i++){

    balanceYear=(i*yearlyInvestment)+cumulativeInterest;
    interest=(balanceYear*7.6)/100;
    cumulativeInterest=(balanceYear-(i*yearlyInvestment))+interest;
    cumulativeBalance=(i*yearlyInvestment)+cumulativeInterest;
    points.push(Math.round(cumulativeBalance));

    }
    setTotalInterest(points[points.length - 1]);

    for(let i=16;i<=21;i++){

    balanceYear=cumulativeBalance;
    interest=(balanceYear*7.6)/100;
    cumulativeInterest=(balanceYear-(i*yearlyInvestment))+interest;
    cumulativeBalance=(i*yearlyInvestment)+cumulativeInterest;
    points.push(Math.round(cumulativeBalance));

    }
    setMaturityValue(points[points.length - 1]);

    let plot=[];
    for(let i=0;i<=15-age;i++){
        plot.push(points[i]);
    }
    setGraphPoints(plot);

  }



  return (
    <>
      <Head>
        <title>SSY calculator</title>
        <link rel="icon" href="./logo.png" />
        <link href="/dist/output.css" rel="stylesheet" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          rel="stylesheet"
          as="font"
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600;700&amp;family=Rubik:wght@400;500;600&amp;display=swap"
        />
        <meta name="description" content="SSY Calculator" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      {/* Background image */}
      <div
        className={
          "bg-bg_image w-full h-full bg-center bg-cover object-cover fixed"
        }
      />

      <main
        className={
          "relative [@media(max-width:470px)]:p-5 [@media(max-width:1280px)]:p-10 xl:p-20 w-full overflow-x-hidden flex-col justify-between text-neutral-700  "
        }
      >
        <div>
          {/* Heading */}
          <div
            className={
              "text-zinc-900 text-5xl font-semibold text-center leading-tight [@media(max-width:300px)]:text-3xl"
            }
          >
            <span className={"text-blue-600"}>SSY</span>{" "}
            Calculator
          </div>
          {/* Subheading */}
          <p className={"text-neutral-700 mt-3 text-lg text-center  [@media(max-width:300px)]:text-sm lg:text-lg"}>
          SSY (Sukanya Samriddhi Yojana) is a government-sponsored savings scheme for the girl child. It is a long-term investment option that offers attractive interest rates and tax benefits.An SSY calculator is a tool that helps you calculate the maturity amount you can expect to receive at the end of the investment period. It takes into account factors such as the investment amount, interest rate, and the tenure of the investment to estimate the final maturity value.
          </p>
        </div>

        {/* Calculator and side pannel */}
        <div
          className={
            "xl:flex max-xl:flex-col flex-wrap w-full xl:max-h-[403px]  mt-[50px] [@media(max-width:400px)]:mt-[20px] justify-between"
          }
        >
          {/* Calculator and graph (WRAPPER) */}
          <div
            className={
              "lg:flex max-md:flex-col p-[30px] xl:w-[75%]  max-lg:space-y-7  border-2 border-white rounded-[30px] shadow-md shadow-[#505C6227] bg-white bg-opacity-40 backdrop-blur-[30px]"            }
          >
            {/* Calculator */}
            <div className={"text-left text-lg lg:w-[50%]  "}>
              {/* Input box wrapper */}
              <div
                className={
                  "flex-col justify-evenly font-medium  max-sm:space-y-3  xl:space-y-[10px] lg:space-y-[15px]"
                }
              >
                {/* Input box */}
                <div>
                  {/*Yearly investment block*/}
                  <div>Yearly investment</div>
                  <Input
                    id="initialInvestment"
                    type="rupees"
                    min={250}
                    max={150000}
                    step={250}
                    value={yearlyInvestment}
                    setValue={setYearlyInvestment}
                  />
                </div>

               

                <div>
                  {/*age block*/}
                  <div>Girl's Age</div>
                  <Input
                    id="years"
                    min={1}
                    max={10}
                    value={age}
                    setValue={setAge}
                  />
                </div>

                <div className="flex flex-row justify-between ">
                  <h3 className=" mt-4">Last Interest Rate</h3>
                  <div className={'h-[42px] w-[40%] mt-4 bg-[#D1E3FF] bg-opacity-[0.39] p-1 border-2 border-solid border-[#9BB0D3] rounded-[100px] text-center font-semibold '}>
                    7.6%
                  </div>

                </div>

              </div>

              {/* Control Box Wrapper */}
              <div
                className={
                  "flex flex-warp justify-center mt-[40px] cursor-pointer "
                }
              >
                {/* Control boxes */}
                <div
                  className={
                    " border-[0.1rem] border-dashed border-[#36b366] p-[4px] rounded-[35px] w-[65%]"
                  }
                >
                  <div
                    className={
                      "text-center text-white font-semibold rounded-[35px] p-[0.3rem]   shadow-lg shadow-[#36b3665d] bg-[#00d382]"
                    }
                    onClick={calculate}
                  >
                    Calculate
                  </div>
                </div>
              </div>
            </div>

            {/* vertical line */}
            <div
              className={
                " -my-4 mx-5 w-0  max-lg:h-0 max-lg:w-auto max-lg:-mx-2 rounded-[50px] border-2 border-solid border-[#7070701A]"
              }
            ></div>

            {/* Charts/Graph wrapper */}
            <div className={"lg:w-[50%]"}>
              {/* Toggle Button */}
              <div
                className={
                  " absolute flex flex-wrap z-10 place-content-center  w-[61px] h-[33px]  rounded-[30px] border-2 border-solid border-white bg-[#505C6227] shadow-md shadow-[#505C6227] backdrop-blur-[30px] m-0"
                }
              >
                <button
                  className={
                    isLineChart
                      ? " w-[23px] h-[23px] rounded-[50px] text-white bg-[#0161FF] border-2 border-solid border-white p-[2px] mx-[1px]"
                      : " w-[23px] h-[23px] rounded-[50px] p-[2px] text-[#909090] mx-[1px]"
                  }
                  onClick={() => {
                    setCheck(true);
                  }}
                >
                  <MdOutlineShowChart />
                </button>
                <button
                  className={
                    isLineChart
                      ? " w-[23px] h-[23px] rounded-[50px] p-[2px] text-[#909090] mx-[1px]"
                      : " w-[23px] h-[23px] rounded-[50px] text-white bg-[#0161FF] border-2 border-solid border-white p-[2px] mx-[1px]"
                  }
                  onClick={() => {
                    setCheck(false);
                  }}
                >
                  <FaChartPie />
                </button>
              </div>

              {/* Charts/Graph */}
              <div className={" relative object-right-top"}>
                {isLineChart ? (
                  <>
                    <LineChart points={graphPoints} />

                    <div className={"mb-3"}>
                      Investments of {" "}
                      <span className={"font-semibold"}>
                        Rs.{yearlyInvestment.toLocaleString("en-In")}
                      </span>{" "}
                      each year should be made to the SSY account until the year{" "}
                      <span className={"font-semibold"}>{years}</span> years.
                    </div>

                    <div className={"m-0"}>
                    The maturity amount received at the end of year {" "}
                    <span className={"font-semibold"}>{maturityAge}</span> {" "}
                    will be {" "}
                      <span className={"font-semibold"}>
                        Rs.{maturityValue.toLocaleString("en-In")}
                      </span>.
                    </div>
                  </>
                ) : (
                  <>
                    <DoughnutChart
                      totalInterest={totalInterest}
                      totalInvestment={totalInvestment}
                    />

                    <div>
                      <div className={"flex justify-between font-medium mb-2"}>
                        <div className="font-semibold">Maturity Year</div>
                        <div className={"font-semibold"}>
                          {maturityAge}
                        </div>
                      </div>

                      <div className={"flex justify-between font-medium mb-2"}>
                        <div className="font-semibold">Total Investment</div>
                        <div className={"font-semibold"}>
                          {totalInvestment.toLocaleString("en-In")}
                        </div>
                      </div>

                      <div className={"flex justify-between font-medium mb-2"}>
                        <div className="font-semibold">Total Interest</div>
                        <div className={"font-semibold"}>
                          {totalInterest.toLocaleString("en-In")}
                        </div>
                      </div>

                      <div className={"flex justify-between font-medium"}>
                        <div className="font-semibold">Maturity Value</div>
                        <div className={"font-semibold"}>
                          {maturityValue.toLocaleString("en-In")}
                        </div>
                      </div>

                    </div>
                  </>
                )}
              </div>

              
            </div>
          </div>

          {/* Side Pannel */}
          <div
            className={
              " max-h-[inherit]  xl:w-[23%] px-[20px] py-[22px] max-xl:mt-[30px]  border-2 border-white rounded-[30px] shadow-md shadow-[#505C6227] bg-white bg-opacity-40 backdrop-blur-[30px] overflow-y-scroll "
            }
          >
            <div className={"font-bold "}>How to use this calculator?</div>
            <CollapsibleBox
              heading={"Sukanya Samriddhi Yojana?"}
              content={
                "Sukanya Samriddhi Yojana (SSY) is a government-sponsored savings scheme in India for the girl child. It is a long-term investment option that offers attractive interest rates and tax benefits."
              }
            />
            <CollapsibleBox
              heading={"Historical interest rates?"}>
                  <>
                    <div className="w-full">
                        <table className=" border-2 border-solid w-full ">
                          <thead>
                            <tr className=" border-2 border-solid ">
                            <th className=" border border-solid p-2 ">Financial Year</th>
                            <th className=" border border-solid p-2 ">Interest Rate</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr className=" border border-solid ">
                              <td className=" border border-solid px-4 py-2 text-center">2014-15</td>
                              <td className=" border border-solid px-4 py-2 text-center">9.1%</td>
                            </tr>
                            <tr className=" border border-solid ">
                              <td className=" border border-solid px-4 py-2 text-center">2015-16</td>
                              <td className=" border border-solid px-4 py-2 text-center">9.2%</td>
                            </tr>
                            <tr className=" border border-solid ">
                              <td className=" border border-solid px-4 py-2 text-center">2016-17</td>
                              <td className=" border border-solid px-4 py-2 text-center">8.6%</td>
                            </tr>
                            <tr className=" border border-solid ">
                              <td className=" border border-solid px-4 py-2 text-center">2016-17</td>
                              <td className=" border border-solid px-4 py-2 text-center">8.5%</td>
                            </tr>
                            <tr className=" border border-solid ">
                              <td className=" border border-solid px-4 py-2 text-center">2017-18</td>
                              <td className=" border border-solid px-4 py-2 text-center">8.4%</td>
                            </tr>
                            <tr className=" border border-solid ">
                              <td className=" border border-solid px-4 py-2 text-center">2017-18</td>
                              <td className=" border border-solid px-4 py-2 text-center">8.3%</td>
                            </tr>
                            <tr className=" border border-solid ">
                              <td className=" border border-solid px-4 py-2 text-center">2017-18</td>
                              <td className=" border border-solid px-4 py-2 text-center">8.1%</td>
                            </tr>
                            <tr className=" border border-solid ">
                              <td className=" border border-solid px-4 py-2 text-center">2018-19</td>
                              <td className=" border border-solid px-4 py-2 text-center">8.1%</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </>
              
            </CollapsibleBox>
            <CollapsibleBox
              heading={"Maturity value of the investment?"}
              content={
                " The returns depend on the invested amount and current interest rates offered.Use the calculator to get an accurate maturity value"
              }
            />
            <CollapsibleBox
              heading={"Maturity year?"}
              content={
                "SSY deposit matures at age 22 of the girl child."
              }
              last={true}
            />

          </div>
        </div>

        {/* FAQ box */}
        <div
          className={
            " px-[25px] py-[10px] mt-[50px] border-2 border-white rounded-[30px] shadow-md shadow-[#505C6227] bg-white bg-opacity-40 backdrop-blur-[30px]"
          }
        >
          <CollapsibleBox
            heading={"What is Sukanya Samriddhi Yojana?"}
            headingBold={true}
            content={
              <>
                <div>Sukanya Samriddhi Yojana (SSY) is a government-sponsored savings scheme in India for the girl child. It is a long-term investment option that offers attractive interest rates and tax benefits.</div>
                <br/>
                <div>Under SSY, parents or guardians can open a savings account in the name of a girl child aged 10 years or below and make regular deposits until the girl reaches the age of 21. The deposit amount is eligible for tax benefits under Section 80C of the Income Tax Act, and the interest earned on the deposit is tax-free.</div>
                <br/>
                <div>The main objective of SSY is to encourage parents to save for the future education and marriage expenses of their girl child and provide financial security for her. The scheme is considered to be a safe and secure investment option with a low risk of capital loss.</div>
              </>
            }
          />

          <CollapsibleBox
            heading={"What is an SSY calculator?"}
            headingBold={true}
            content={
              "An SSY calculator is a tool that helps you calculate the maturity amount you can expect to receive at the end of the investment period. It takes into account factors such as the investment amount, interest rate, and the tenure of the investment to estimate the final maturity value."
            }
          />

          <CollapsibleBox
            heading={"How can you use the SSY calculator?"}
            headingBold={true}
            content={
              <>
                <div>This calculator can be used to calculate the returns of your SSY investment. Just input the yearly investment amount, the age of the girl child and the year of start of investment. The calculator will give you the maturity year, total invested amount, total interest earned and total corpus at the time of maturity.</div>
              </>
            }
          />

          <CollapsibleBox
            heading={"How does the SSY calculator work?"}
            headingBold={true}
            content={
              <>
              <div>The SSY calculator takes 3 inputs namely, Yearly investment, age of the girl child, and the year of investment.</div>
              <div>It uses the following logic</div>
              <br/>
              <div className="font-bold">A = P(1+r/n)^nt </div>
              <div>P = Initial Deposit </div>
              <div>r = Rate of interest </div>
              <div>n = Number of years the interest compounds </div>
              <div>t = Number of years </div>
              <div>A = Amount at maturity</div>

              </>
            }
          />

          <CollapsibleBox
            heading={"When does my SSY investment mature? "}
            headingBold={true}
            content={
              <>
              <div>The maturity period of the Sukanya Samriddhi Yojana (SSY) savings scheme in India is 21 years from the date of opening the account or until the girl child reaches the age of 21, whichever is earlier.</div>
              <br/>
              <div>During this period, parents or guardians can make regular deposits into the account, subject to the prevailing limits and conditions. The deposit amount earns interest at the rate set by the government, which is reviewed and revised periodically.</div>
              <br/>
              <div>Once the maturity period is reached, the account can be closed, and the deposit amount along with the accumulated interest can be withdrawn. 
              </div>
              </>}
          />

            <CollapsibleBox
            heading={"What are the tax implications of SSY returns?"}
            headingBold={true}
            content={
              <>
              <ul>
                <li className=" flex flex-row"><VscCircleFilled style={{color:'#00DD6F' , marginTop:'0.35rem' ,marginRight:'0.3rem'}}></VscCircleFilled>Deduction under Section 80C: The deposit made into an SSY account is eligible for a tax deduction under Section 80C of the Income Tax Act, up to a limit of ₹1.5 lakh per financial year.</li>
                <li className=" flex flex-row"><VscCircleFilled style={{color:'#00DD6F', marginTop:'0.35rem',marginRight:'0.3rem'}}></VscCircleFilled>Tax-free interest: The interest earned on the deposit in an SSY account is exempt from tax.</li>
                <li className=" flex flex-row"><VscCircleFilled style={{color:'#00DD6F', marginTop:'0.35rem',marginRight:'0.3rem'}}></VscCircleFilled>Exemption under Section 10(10D): The maturity amount received on the closure of the SSY account is exempt from tax under Section 10(10D) of the Income Tax Act.</li>
              </ul>
              </>}
          />
        
        <CollapsibleBox
            heading={"Is withdrawal permitted before maturity?"}
            headingBold={true}
            content={
              
              'Withdrawals under Sukanya Samriddhi Account, are allowed only after the girl child turns 18 years and can be used for higher education purposes.'
              }
            last={true}
          />
        </div>

        {/* Related Calculators */}
        <div className={"my-[30px] "}>
          <div className={"font-bold text-lg mb-[14px] text-[#464143]"}>
            Related Calculators
          </div>

          <div className={"overflow-x-scroll flex "}>
            <RelatedCalculator
              name={"SWP Calculator"}
              path={"#"}
              first={true}
            />

            <RelatedCalculator name={"SWP Calculator"} path={"#"} />

            <RelatedCalculator name={"SWP Calculator"} path={"#"} />

            <RelatedCalculator name={"SWP Calculator"} path={"#"} />

            <RelatedCalculator name={"SWP Calculator"} path={"#"} />

            <RelatedCalculator name={"SWP Calculator"} path={"#"} />

            <RelatedCalculator name={"SWP Calculator"} path={"#"} />

            <RelatedCalculator name={"SWP Calculator"} path={"#"} />

            <RelatedCalculator name={"SWP Calculator"} path={"#"} />

            <RelatedCalculator name={"SWP Calculator"} path={"#"} />
          </div>
        </div>
      </main>
    </>
  );
}