import React, {useState} from 'react'
import './scale-slider.scss'
import { ScaleSliderProps } from '../../../models/components-props';
import closeTriangleUrl from '../../../assets/images/closeTriangle.svg';
import Slider from '@material-ui/core/Slider';

const ScaleSlider = (props: ScaleSliderProps) => {
    const [isScaleSliderHidden, setScaleSliderHidden] = useState(false);
    const {scaleRate, setScaleRate} = props;

    const toggleScaleSlider = () => {
        setScaleSliderHidden(!isScaleSliderHidden);
    }

    const handleSliderChange = (event: any, newValue: number | number[]) => {
        setScaleRate(newValue as number);
      }; 

    return (
        <div className={`scale-slider ${isScaleSliderHidden ? "hidden" : ""}`}>
             <div className="scale-slider-closer" onClick={toggleScaleSlider}>
                <img src={closeTriangleUrl} />
             </div>
             <div className="scale-slider-content">
                 <div className="slider-title">
                    <h4>Scale the map</h4>
                 </div>
                 <div className="scale-slider-slider">
                    <Slider value={scaleRate} onChange={handleSliderChange} defaultValue={1.0} min={0.25} max={1.50} step={0.01} />
                 </div>
                 <div className="scale-slider-value">
                     <h5>
                         Scale rate: 
                         <span>
                            {scaleRate}
                        </span>
                    </h5> 
                    </div>
             </div>
        </div>
    )
}

export default ScaleSlider
