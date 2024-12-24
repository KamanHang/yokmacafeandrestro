// import React from 'react'
// import './PlaceOrder.css'

// import PropTypes from 'prop-types';
// import { useTheme } from '@mui/material/styles';
// import AppBar from '@mui/material/AppBar';
// import Tabs from '@mui/material/Tabs';
// import Tab from '@mui/material/Tab';
// import Typography from '@mui/material/Typography';
// import Box from '@mui/material/Box';

// function samePageLinkNavigation(event) {
//     if (
//         event.defaultPrevented ||
//         event.button !== 0 || // ignore everything but left-click
//         event.metaKey ||
//         event.ctrlKey ||
//         event.altKey ||
//         event.shiftKey
//     ) {
//         return false;
//     }
//     return true;
// }

// function LinkTab(props) {
//     return (
//         <Tab
//             component="a"
//             onClick={(event) => {
//                 // Routing libraries handle this, you can remove the onClick handle when using them.
//                 if (samePageLinkNavigation(event)) {
//                     event.preventDefault();
//                 }
//             }}
//             aria-current={props.selected && 'page'}
//             {...props}
//         />
//     );
// }

// LinkTab.propTypes = {
//     selected: PropTypes.bool,
// };



// const PlaceOrder = () => {

//     const [value, setValue] = React.useState(0);

//     const handleChange = (event, newValue) => {
//         // event.type can be equal to focus with selectionFollowsFocus.
//         if (
//             event.type !== 'click' ||
//             (event.type === 'click' && samePageLinkNavigation(event))
//         ) {
//             setValue(newValue);
//         }
//     };


//     return (
//         <>
//             <div className='main-container'>

//                 <div className='order-container'>

//                     <div className='heading'>
//                         <p>Place Order</p>
//                     </div>

//                     <Box sx={{ width: '100%' }}>
//                         <Tabs
//                             value={value}
//                             onChange={handleChange}
//                             aria-label="nav tabs example"
//                             role="navigation"
//                         >
//                             <LinkTab label="BOT" href="/bot" />
//                             <LinkTab label="KOT" href="/kot" />
//                         </Tabs>
//                     </Box>









//                 </div>

//                 <div className='total-container'>
//                     <div className='heading'>
//                         <p>Total</p>
//                     </div>
//                 </div>

//             </div>
//         </>
//     )
// }

// export default PlaceOrder


import React from 'react';
import './PlaceOrder.css';

import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import BOT from './Order/BOT';
import KOT from './Order/KOT';

function samePageLinkNavigation(event) {
    if (
        event.defaultPrevented ||
        event.button !== 0 || // ignore everything but left-click
        event.metaKey ||
        event.ctrlKey ||
        event.altKey ||
        event.shiftKey
    ) {
        return false;
    }
    return true;
}

function LinkTab(props) {
    return (
        <Tab
            component="a"
            onClick={(event) => {
                if (samePageLinkNavigation(event)) {
                    event.preventDefault();
                }
            }}
            aria-current={props.selected && 'page'}
            {...props}
        />
    );
}

LinkTab.propTypes = {
    selected: PropTypes.bool,
    label: PropTypes.string.isRequired,
    href: PropTypes.string.isRequired,
};

// const Bot = () => (
//     <div>
//         <h2>This is the BOT content</h2>
//         <p>Here you can manage bot orders and view details.</p>
//     </div>
// );

// const Kot = () => (
//     <div>
//         <h2>This is the KOT content</h2>
//         <p>Here you can manage kitchen orders and view details.</p>
//     </div>
// );

const PlaceOrder = () => {
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        if (
            event.type !== 'click' ||
            (event.type === 'click' && samePageLinkNavigation(event))
        ) {
            setValue(newValue);
        }
    };

    const renderComponent = () => {
        switch (value) {
            case 0:
                return <BOT />;
            case 1:
                return <KOT />;
            default:
                return <BOT />;
        }
    };

    return (
        <>
            <div className='main-container'>
                <div className='order-container'>
                    <div className='heading'>
                        <p>Place Order</p>
                    </div>

                    <Box sx={{ width: '100%', display:'flex', justifyContent:'center'  }}>
                        <Tabs
                            value={value}
                            onChange={handleChange}
                            aria-label="nav tabs example"
                            role="navigation"
                            textColor='#591f0b'
                            
                        >
                            <LinkTab label="BOT" href="#" />
                            <LinkTab label="KOT" href="#" />
                        </Tabs>
                    </Box>

                    <div className="tab-content">
                        {renderComponent()}
                    </div>
                </div>

                <div className='total-container'>
                    <div className='heading'>
                        <p>Total</p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default PlaceOrder;
