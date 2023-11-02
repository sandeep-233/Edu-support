import React from 'react'
import Button from './Button'
import {BsFillArrowRightCircleFill} from "react-icons/bs"
import { TypeAnimation } from 'react-type-animation'
import image from '../../../assets/Images/Pooja0002.jpg'


const CodeBlocks = ({
  position, heading, subheading, btn1, codeblock, backgroundGradiant, codeColor
}) => {
  return (
    <div className={`flex ${position} my-20 justify-between gap-10`}>

      {/* section 1 */}
      <div className='w-full lg:w-[50%] flex flex-col gap-8'>
        {heading}
        <div className='text-richblack-300 font-bold '>
          {subheading}
        </div>

        <div className='flex gap-7 mt-7'>
          <Button active={btn1.active} linkto={btn1.linkto}>
            <div className='flex gap-2 items-center'>
              {btn1.btnText}
              <BsFillArrowRightCircleFill/>
            </div>
          </Button>
        </div>

      </div>

      {/* section 2 */}
      <div className='h-fit flex lg:flex-row text-[10px] w-[100%] py-4 lg:w-[500px]'>
        {/* HW: add bg-gradiant  */}

        {
          codeblock != "" && (
            <div className='text-center flex flex-col w-[10%] text-richblack-400 font-inter font-bold'>
            <p>1</p>
            <p>2</p>
            <p>3</p>
            <p>4</p>
            <p>5</p>
            <p>6</p>
            <p>7</p>
            <p>8</p>
            <p>9</p>
            <p>10</p>
            <p>11</p>
            <p>12</p>
            <p>13</p>
            <p>14</p>
            <p>15</p>
            <p>16</p>
          </div>
          )
        }
        {
          codeblock == "" && (
            <div>
              <img src={image} alt="" />
            </div>
          )
        }

        <div className={`w-[90%] flex flex-col gap-3 font-bold font-mono ${codeColor} pr-2`}>
          <TypeAnimation
          
            sequence={[codeblock, 1000, ""]}
            repeat= {Infinity}
            cursor={true}

            style={
              {
                whiteSpace: "pre-line",
                display: "block",
              }
            }

            omitDeletionAnimation={true}
          
          />
        </div>
      </div>

    </div>
  )
}

export default CodeBlocks
