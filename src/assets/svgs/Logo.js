import React from 'react';

const Logo = ({ size, color, plain }) => {

    const darken = (color) => {
        var rgbObject = toRGB(color);
        var rgb = `rgb(${rgbObject.r}, ${rgbObject.g}, ${rgbObject.b})`;
        var r = parseInt(rgbObject.r) - 20;
        var g = parseInt(rgbObject.g) - 20;
        var b = parseInt(rgbObject.b) - 20;
        var darkened = `rgb(${r}, ${g}, ${b})`;
        return darkened;
    }

    const toRGB = (hex) => {
        var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
        return result ? {
          r: parseInt(result[1], 16),
          g: parseInt(result[2], 16),
          b: parseInt(result[3], 16)
        } : null;
    }

    return (
        <div style={{width: size}}>
        <svg 
            version="1.1" 
            id="Layer_1" 
            xmlns="http://www.w3.org/2000/svg" 
            xmlnsXlink="http://www.w3.org/1999/xlink" 
            x="0px" 
            y="0px"
            viewBox="0 0 512 512" 
            // style="enable-background:new 0 0 512 512;" 
            xmlSpace="preserve">
        <path 
            // style="fill:#4DA6FF;" 
            style={{fill: color}}
            d="M316,0c-24.749,0-45,20.249-45,45c0,24.749,20.251,45,45,45s45-20.251,45-45C361,20.249,340.75,0,316,0z"
        />
        <g>
            <path 
                // style="fill:#4596E6;" 
                // SHOULD BE SLIGHTLY DARKER
                style={{fill: plain ? color : darken(color)}}
                d="M391,210c0,16.5-13.5,30-30,30H231.4l28.2-60H361C377.5,180,391,193.5,391,210z"
            />
            <path 
                // style="fill:#4596E6;" 
                // SHOULD BE SLIGHTLY DARKER
                style={{fill: plain ? color : darken(color)}}
                d="M180.997,264.917L132.455,362H61c-16.538,0-30,13.462-30,30s13.462,30,30,30h90c11.44,0,21.724-6.357,26.836-16.582l51.705-103.431L180.997,264.917z"
            />
        </g>
        <polygon 
            // style="fill:#F6B73C;" 
            // ???
            style={{fill: '#F6B73C'}}
            points="264.672,184.731 264.247,185.596 264.833,184.834 "
        />
        <path 
            // style="fill:#4DA6FF;" 
            style={{fill: color}}
            d="M331,332v90c0,16.5-13.5,30-30,30s-30-13.5-30-30v-73.801l-76.5-51.301
            C181.901,288.5,177.4,272,184.3,258.5l38.1-78.5H190l-82.5,54.899C93.701,244.2,75.099,240.3,66.1,226.5
            c-9.3-13.5-5.4-32.401,8.401-41.4l90-60C169.3,121.8,175,120,181,120h90c16.5,0,30,14.099,30,30c0,4.499-0.901,9-3.3,13.5
            l-48,98.299L301,296l16.5,11.1C325.901,312.499,331,322.099,331,332z"
        />
        <path 
            // style="fill:#6F7D96;" 
            style={{fill: plain ? color : '#6F7D96'}}
            d="M476.5,417.499L455.501,438.8c-8.701,8.399-19.801,13.2-31.8,13.2H196c-8.401,0-15-6.601-15-15
            c0-8.401,6.599-15,15-15h227.701c3.898,0,7.798-1.5,10.499-4.501l21.301-21c5.7-5.999,15.298-5.999,20.999,0
            C482.5,402.199,482.5,411.799,476.5,417.499z"
        />
        <path 
            // style="fill:#66728B;" 
            style={{fill: plain ? color : '#66728B'}}
            d="M476.5,417.499L455.501,438.8c-8.701,8.399-19.801,13.2-31.8,13.2H301v-30h122.701
            c3.898,0,7.798-1.5,10.499-4.501l21.301-21c5.7-5.999,15.298-5.999,20.999,0C482.5,402.199,482.5,411.799,476.5,417.499z"
        />
        <path 
            // style="fill:#495A79;" 
            style={{fill: plain ? color : '#495A79'}}
            d="M256,422c-24.901,0-45,20.099-45,45c0,24.899,20.099,45,45,45s45-20.101,45-45
            C301,442.099,280.901,422,256,422z"
        />
        <path 
            // style="fill:#42516D;" 
            style={{fill: plain ? color : '#495A79'}}
            d="M301,467c0,24.899-20.099,45-45,45v-90C280.901,422,301,442.099,301,467z"
        />
        <path 
            // style="fill:#E0E4EC;" 
            style={{fill: plain ? color : '#E0E4EC'}}
            d="M256,452c-8.401,0-15,6.599-15,15c0,8.399,6.599,15,15,15s15-6.601,15-15
            C271,458.599,264.401,452,256,452z"
        />
        <path 
            // style="fill:#D1D7E3;" 
            style={{fill: plain ? color : '#D1D7E3'}}
            d="M271,467c0,8.399-6.599,15-15,15v-30C264.401,452,271,458.599,271,467z"
        />
        <path 
            // style="fill:#495A79;" 
            style={{fill: plain ? color : '#495A79'}}
            d="M406,422c-24.901,0-45,20.099-45,45c0,24.899,20.099,45,45,45s45-20.101,45-45
            C451,442.099,430.901,422,406,422z"
        />
        <path 
            // style="fill:#42516D;" 
            style={{fill: plain ? color : '#495A79'}}
            d="M451,467c0,24.899-20.099,45-45,45v-90C430.901,422,451,442.099,451,467z"
        />
        <path 
            // style="fill:#E0E4EC;" 
            style={{fill: plain ? color : '#E0E4EC'}}
            d="M406,452c-8.401,0-15,6.599-15,15c0,8.399,6.599,15,15,15s15-6.601,15-15
            C421,458.599,414.401,452,406,452z"
        />
        <path 
            // style="fill:#D1D7E3;" 
            style={{fill: plain ? color : '#D1D7E3'}}
            d="M421,467c0,8.399-6.599,15-15,15v-30C414.401,452,421,458.599,421,467z"
        />
        <g>
        </g>
        <g>
        </g>
        <g>
        </g>
        <g>
        </g>
        <g>
        </g>
        <g>
        </g>
        <g>
        </g>
        <g>
        </g>
        <g>
        </g>
        <g>
        </g>
        <g>
        </g>
        <g>
        </g>
        <g>
        </g>
        <g>
        </g>
        <g>
        </g>
        </svg>
        </div>
    )
}

export default Logo;