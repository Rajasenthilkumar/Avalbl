import React, { useState } from 'react';
import '../../../Assets/css/Skills.css';
import { Box, Grid, IconButton,Button } from '@mui/material';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';

// interface ToolsDetailsProps {
//   activeStep: number;
//   handleNext: () => void;
//   handleBack: () => void;
// }

interface CheckedItems {
  [key: string]: boolean;
}
const PersonalTool: React.FC = () => {

  const [isOpen, setIsOpen] = useState<{ [key: string]: boolean }>({});
  const [checkedItems, setCheckedItems] = useState<CheckedItems>({});

//   const handleToolDetailsData = () => {
//     console.log('Tools Details');
//     // handleNext();
//   };

  const handleToggle = (key: any) => {
    setIsOpen((prevIsOpen) => ({
      ...prevIsOpen,
      [key]: !prevIsOpen[key],
    }));
  };

  const handleCheckboxChange = (category: string, itemName: string) => {
    setCheckedItems((prevCheckedItems) => ({
      ...prevCheckedItems,
      [`${category}-${itemName}`]: !prevCheckedItems[`${category}-${itemName}`],
    }));
  };
  const handleCancelClick = () => {
    // Handle cancel action
};

const handleSubmitClick = () => {
    // Handle save action
};
  return (
    <>
      <div style={{ margin: '0px', position: 'relative' }}> 
        <Grid
          container
          sx={{
            position: 'absolute',
            top: -140,
            right: 0,
            justifyContent: 'flex-end',
            alignItems: 'flex-start',
          }}
        >
          <Button
            className="common-button-white"
            type="submit"
            variant="contained"
            onClick={handleCancelClick}
            sx={{
              width: '167px',
              height: '44px',
              marginRight: 1,
              '&:hover': {
                color: 'var(--Primary, #2CB512)',
                backgroundColor: '#fff',
              },
            }}
          >
            Cancel
          </Button>
          <Button
            className="common-button-green"
            type="submit"
            variant="contained"
            onClick={handleSubmitClick}
            sx={{
              width: '121px',
              height: '44px',
              marginLeft: 1,
              '&:hover': {
                background: 'var(--Primary, #2CB512)',
              },
            }}
          >
            Submit
          </Button>
        
        </Grid>
       
       
      </div>
    <Box sx={{ p: '20px',backgroundColor:'#FFFFFF',borderRadius:'10px' }}>

    
      <div id="app">
        <div >
          <div className="box-content tool" style={{ fontFamily: 'Onest, sans-serif' }}>
            <Grid container sx={{ pl: 0 }}>
              <Grid item sm={4}>
                <div className="list-box">
                  <ul style={{ paddingLeft: 0 }}>
                    <li>
                      <div className="check-box">
                        <div
                          className="check-head"
                          onClick={() => {
                            const element1 = document.getElementById('demo1');
                            if (element1) {
                              element1.classList.toggle('show');
                              handleToggle('demo1');
                            }
                          }}>
                          <h4>Design Illustration</h4>
                          <IconButton className="drop-icon" aria-label="angle-down">
                            {isOpen.demo1 ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
                          </IconButton>
                        </div>
                        <ul id="demo1" className="collapse">
                          <li>
                            <div
                              className={`form-group check-text ${
                                checkedItems['DesignIllustration-pshop'] ? 'green-box' : ''
                              }`}>
                              <label htmlFor="pshop">Photoshop</label>
                              <input
                                type="checkbox"
                                id="pshop"
                                name="pshop"
                                checked={checkedItems['DesignIllustration-pshop']}
                                onChange={() => handleCheckboxChange('DesignIllustration', 'pshop')}
                              />
                            </div>
                          </li>
                          <li>
                            <div
                              className={`form-group check-text ${
                                checkedItems['DesignIllustration-illustrator'] ? 'green-box' : ''
                              }`}>
                              <label htmlFor="illustrator">Illustrator</label>
                              <input
                                type="checkbox"
                                id="illustrator"
                                name="illustrator"
                                checked={checkedItems['DesignIllustration-illustrator']}
                                onChange={() => handleCheckboxChange('DesignIllustration', 'illustrator')}
                              />
                            </div>
                          </li>
                          <li>
                            <div
                              className={`form-group check-text ${
                                checkedItems['DesignIllustration-pro-create'] ? 'green-box' : ''
                              }`}>
                              <label htmlFor="pro-create">Procreate</label>
                              <input
                                type="checkbox"
                                id="pro-create"
                                name="pro-create"
                                checked={checkedItems['DesignIllustration-pro-create']}
                                onChange={() => handleCheckboxChange('DesignIllustration', 'pro-create')}
                              />
                            </div>
                          </li>
                          <li>
                            <div
                              className={`form-group check-text ${
                                checkedItems['DesignIllustration-toon-pro'] ? 'green-box' : ''
                              }`}>
                              <label htmlFor="toon-pro">Toon Boom Storyboard pro</label>
                              <input
                                type="checkbox"
                                id="toon-pro"
                                name="toon-pro"
                                checked={checkedItems['DesignIllustration-toon-pro']}
                                onChange={() => handleCheckboxChange('DesignIllustration', 'toon-pro')}
                              />
                            </div>
                          </li>
                          <li>
                            <div
                              className={`form-group check-text ${
                                checkedItems['DesignIllustration-aff-designer'] ? 'green-box' : ''
                              }`}>
                              <label htmlFor="aff-designer">Affinity Designer</label>
                              <input
                                type="checkbox"
                                id="aff-designer"
                                name="aff-designer"
                                checked={checkedItems['DesignIllustration-aff-designer']}
                                onChange={() => handleCheckboxChange('DesignIllustration', 'aff-designer')}
                              />
                            </div>
                          </li>
                          <li>
                            <div
                              className={`form-group check-text ${
                                checkedItems['DesignIllustration-figma'] ? 'green-box' : ''
                              }`}>
                              <label htmlFor="figma">Figma</label>
                              <input
                                type="checkbox"
                                id="figma"
                                name="figma"
                                checked={checkedItems['DesignIllustration-figma']}
                                onChange={() => handleCheckboxChange('DesignIllustration', 'figma')}
                              />
                            </div>
                          </li>
                          <li>
                            <div
                              className={`form-group check-text ${
                                checkedItems['DesignIllustration-clip-std'] ? 'green-box' : ''
                              }`}>
                              <label htmlFor="clip-std">Clip Studio Paint</label>
                              <input
                                type="checkbox"
                                id="clip-std"
                                name="clip-std"
                                checked={checkedItems['DesignIllustration-clip-std']}
                                onChange={() => handleCheckboxChange('DesignIllustration', 'clip-std')}
                              />
                            </div>
                          </li>
                        </ul>
                      </div>
                    </li>
                    <li>
                      <div className="check-box">
                        <div
                          className="check-head"
                          onClick={() => {
                            const element4 = document.getElementById('demo4');
                            if (element4) {
                              element4.classList.toggle('show');
                              handleToggle('demo4');
                            }
                          }}>
                          <h4>Video Editing</h4>
                          <IconButton className="drop-icon" aria-label="angle-down">
                            {isOpen.demo4 ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
                          </IconButton>
                        </div>
                        <ul id="demo4" className="collapse">
                          <li>
                            <div
                              className={`form-group check-text ${checkedItems['VideoEditing-resolve'] ? 'green-box' : ''}`}>
                              <label htmlFor="resolve">Resolve</label>
                              <input
                                type="checkbox"
                                id="resolve"
                                name="resolve"
                                checked={checkedItems['VideoEditing-resolve']}
                                onChange={() => handleCheckboxChange('VideoEditing', 'resolve')}
                              />
                            </div>
                          </li>
                          <li>
                            <div
                              className={`form-group check-text ${
                                checkedItems['VideoEditing-premiere'] ? 'green-box' : ''
                              }`}>
                              <label htmlFor="premiere">Premiere</label>
                              <input
                                type="checkbox"
                                id="premiere"
                                name="premiere"
                                checked={checkedItems['VideoEditing-premiere']}
                                onChange={() => handleCheckboxChange('VideoEditing', 'premiere')}
                              />
                            </div>
                          </li>
                          <li>
                            <div
                              className={`form-group check-text ${
                                checkedItems['VideoEditing-final-cut'] ? 'green-box' : ''
                              }`}>
                              <label htmlFor="final-cut">Final Cut Pro</label>
                              <input
                                type="checkbox"
                                id="final-cut"
                                name="final-cut"
                                checked={checkedItems['VideoEditing-final-cut']}
                                onChange={() => handleCheckboxChange('VideoEditing', 'final-cut')}
                              />
                            </div>
                          </li>
                          <li>
                            <div
                              className={`form-group check-text ${
                                checkedItems['VideoEditing-avid-media'] ? 'green-box' : ''
                              }`}>
                              <label htmlFor="avid-media">Avid Media Composer</label>
                              <input
                                type="checkbox"
                                id="avid-media"
                                name="avid-media"
                                checked={checkedItems['VideoEditing-avid-media']}
                                onChange={() => handleCheckboxChange('VideoEditing', 'avid-media')}
                              />
                            </div>
                          </li>
                        </ul>
                      </div>
                    </li>
                  </ul>
                </div>
              </Grid>
              <Grid item sm={4}>
                <div className="list-box">
                  <ul style={{ paddingLeft: 0 }}>
                    <li className="grid-box">
                      <div className="check-box">
                        <div
                          className="check-head"
                          onClick={() => {
                            const element2 = document.getElementById('demo2');
                            if (element2) {
                              element2.classList.toggle('show');
                              handleToggle('demo2');
                            }
                          }}>
                          <h4>2D Animation</h4>
                          <IconButton className="drop-icon" aria-label="angle-down">
                            {isOpen.demo2 ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
                          </IconButton>
                        </div>
                        <ul id="demo2" className="collapse">
                          <li>
                            <div
                              className={`form-group check-text ${
                                checkedItems['2DAnimation-after-effect'] ? 'green-box' : ''
                              }`}>
                              <label htmlFor="after-effect">After Effects</label>
                              <input
                                type="checkbox"
                                id="after-effect"
                                name="after-effect"
                                checked={checkedItems['2DAnimation-after-effect']}
                                onChange={() => handleCheckboxChange('2DAnimation', 'after-effect')}
                              />
                            </div>
                          </li>
                          <li>
                            <div
                              className={`form-group check-text ${checkedItems['2DAnimation-cavalry'] ? 'green-box' : ''}`}>
                              <label htmlFor="cavalry">Cavalry </label>
                              <input
                                type="checkbox"
                                id="cavalry"
                                name="cavalry"
                                checked={checkedItems['2DAnimation-cavalry']}
                                onChange={() => handleCheckboxChange('2DAnimation', 'cavalry')}
                              />
                            </div>
                          </li>
                          <li>
                            <div
                              className={`form-group check-text ${
                                checkedItems['2DAnimation-animation'] ? 'green-box' : ''
                              }`}>
                              <label htmlFor="animation">Adobe Animate</label>
                              <input
                                type="checkbox"
                                id="animation"
                                name="animation"
                                checked={checkedItems['2DAnimation-animation']}
                                onChange={() => handleCheckboxChange('2DAnimation', 'animation')}
                              />
                            </div>
                          </li>
                          <li>
                            <div
                              className={`form-group check-text ${checkedItems['2DAnimation-tv-paint'] ? 'green-box' : ''}`}>
                              <label htmlFor="tv-paint">Tv Paint</label>
                              <input
                                type="checkbox"
                                id="tv-paint"
                                name="tv-paint"
                                checked={checkedItems['2DAnimation-tv-paint']}
                                onChange={() => handleCheckboxChange('2DAnimation', 'tv-paint')}
                              />
                            </div>
                          </li>
                          <li>
                            <div className={`form-group check-text ${checkedItems['2DAnimation-moho'] ? 'green-box' : ''}`}>
                              <label htmlFor="moho">Moho</label>
                              <input
                                type="checkbox"
                                id="moho"
                                name="moho"
                                checked={checkedItems['2DAnimation-moho']}
                                onChange={() => handleCheckboxChange('2DAnimation', 'moho')}
                              />
                            </div>
                          </li>
                          <li>
                            <div
                              className={`form-group check-text ${
                                checkedItems['2DAnimation-toon-harmony'] ? 'green-box' : ''
                              }`}>
                              <label htmlFor="toon-harmony">Toon Boom Harmony</label>
                              <input
                                type="checkbox"
                                id="toon-harmony"
                                name="toon-harmony"
                                checked={checkedItems['2DAnimation-toon-harmony']}
                                onChange={() => handleCheckboxChange('2DAnimation', 'toon-harmony')}
                              />
                            </div>
                          </li>
                          <li>
                            <div
                              className={`form-group check-text ${
                                checkedItems['2DAnimation-dragon-frame'] ? 'green-box' : ''
                              }`}>
                              <label htmlFor="dragon-frame">Dragon frame</label>
                              <input
                                type="checkbox"
                                id="dragon-frame"
                                name="dragon-frame"
                                checked={checkedItems['2DAnimation-dragon-frame']}
                                onChange={() => handleCheckboxChange('2DAnimation', 'dragon-frame')}
                              />
                            </div>
                          </li>
                          <li>
                            <div className={`form-group check-text ${checkedItems['2DAnimation-rive'] ? 'green-box' : ''}`}>
                              <label htmlFor="rive">Rive</label>
                              <input
                                type="checkbox"
                                id="rive"
                                name="rive"
                                checked={checkedItems['2DAnimation-rive']}
                                onChange={() => handleCheckboxChange('2DAnimation', 'rive')}
                              />
                            </div>
                          </li>
                        </ul>
                      </div>
                    </li>
                    <li className="grid-box">
                      <div className="check-box">
                        <div
                          className="check-head"
                          onClick={() => {
                            const element5 = document.getElementById('demo5');
                            if (element5) {
                              element5.classList.toggle('show');
                              handleToggle('demo5');
                            }
                          }}>
                          <h4>Audio</h4>
                          <IconButton className="drop-icon" aria-label="angle-down">
                            {isOpen.demo5 ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
                          </IconButton>
                        </div>
                        <ul id="demo5" className="collapse">
                          <li>
                            <div className={`form-group check-text ${checkedItems['Audio-adobe-audio'] ? 'green-box' : ''}`}>
                              <label htmlFor="adobe-audio">Adobe Audition</label>
                              <input
                                type="checkbox"
                                id="adobe-audio"
                                name="adobe-audio"
                                checked={checkedItems['Audio-adobe-audio']}
                                onChange={() => handleCheckboxChange('Audio', 'adobe-audio')}
                              />
                            </div>
                          </li>
                          <li>
                            <div className={`form-group check-text ${checkedItems['Audio-protool'] ? 'green-box' : ''}`}>
                              <label htmlFor="protool">Protools</label>
                              <input
                                type="checkbox"
                                id="protool"
                                name="protool"
                                checked={checkedItems['Audio-protool']}
                                onChange={() => handleCheckboxChange('Audio', 'protool')}
                              />
                            </div>
                          </li>
                          <li>
                            <div
                              className={`form-group check-text ${checkedItems['Audio-garage-brand'] ? 'green-box' : ''}`}>
                              <label htmlFor="garage-brand">Garage Brand</label>
                              <input
                                type="checkbox"
                                id="garage-brand"
                                name="garage-brand"
                                checked={checkedItems['Audio-garage-brand']}
                                onChange={() => handleCheckboxChange('Audio', 'garage-brand')}
                              />
                            </div>
                          </li>
                          <li>
                            <div className={`form-group check-text ${checkedItems['Audio-logic-pro'] ? 'green-box' : ''}`}>
                              <label htmlFor="logic-pro">Logic Pro</label>
                              <input
                                type="checkbox"
                                id="logic-pro"
                                name="logic-pro"
                                checked={checkedItems['Audio-logic-pro']}
                                onChange={() => handleCheckboxChange('Audio', 'logic-pro')}
                              />
                            </div>
                          </li>
                          <li>
                            <div className={`form-group check-text ${checkedItems['Audio-fl-std'] ? 'green-box' : ''}`}>
                              <label htmlFor="fl-std">FL-Studio</label>
                              <input
                                type="checkbox"
                                id="fl-std"
                                name="fl-std"
                                checked={checkedItems['Audio-fl-std']}
                                onChange={() => handleCheckboxChange('Audio', 'fl-std')}
                              />
                            </div>
                          </li>
                          <li>
                            <div className={`form-group check-text ${checkedItems['Audio-audacity'] ? 'green-box' : ''}`}>
                              <label htmlFor="audacity">Audacity</label>
                              <input
                                type="checkbox"
                                id="audacity"
                                name="audacity"
                                checked={checkedItems['Audio-audacity']}
                                onChange={() => handleCheckboxChange('Audio', 'audacity')}
                              />
                            </div>
                          </li>
                          <li>
                            <div className={`form-group check-text ${checkedItems['Audio-abelton'] ? 'green-box' : ''}`}>
                              <label htmlFor="abelton">Ableton</label>
                              <input
                                type="checkbox"
                                id="abelton"
                                name="abelton"
                                checked={checkedItems['Audio-abelton']}
                                onChange={() => handleCheckboxChange('Audio', 'abelton')}
                              />
                            </div>
                          </li>
                          <li>
                            <div className={`form-group check-text ${checkedItems['Audio-cubase'] ? 'green-box' : ''}`}>
                              <label htmlFor="cubase">Cubase</label>
                              <input
                                type="checkbox"
                                id="cubase"
                                name="cubase"
                                checked={checkedItems['Audio-cubase']}
                                onChange={() => handleCheckboxChange('Audio', 'cubase')}
                              />
                            </div>
                          </li>
                          <li>
                            <div className={`form-group check-text ${checkedItems['Audio-reaper'] ? 'green-box' : ''}`}>
                              <label htmlFor="reaper">Reaper</label>
                              <input
                                type="checkbox"
                                id="reaper"
                                name="reaper"
                                checked={checkedItems['Audio-reaper']}
                                onChange={() => handleCheckboxChange('Audio', 'reaper')}
                              />
                            </div>
                          </li>
                        </ul>
                      </div>
                    </li>
                  </ul>
                </div>
              </Grid>
              <Grid item sm={4} className="col-md-4 pl-0">
                <div className="list-box">
                  <ul style={{ paddingLeft: 0 }}>
                    <li className="grid-box">
                      <div className="check-box">
                        <div
                          className="check-head"
                          onClick={() => {
                            const element3 = document.getElementById('demo3');
                            if (element3) {
                              element3.classList.toggle('show');
                              handleToggle('demo3');
                            }
                          }}>
                          <h4>3D Tools</h4>
                          <IconButton className="drop-icon" aria-label="angle-down">
                            {isOpen.demo3 ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
                          </IconButton>
                        </div>
                        <ul id="demo3" className="collapse">
                          <li>
                            <div className={`form-group check-text ${checkedItems['3DTools-cn-direct'] ? 'green-box' : ''}`}>
                              <label htmlFor="cn-direct">Cinema 4D</label>
                              <input
                                type="checkbox"
                                id="cn-direct"
                                name="cn-direct"
                                checked={checkedItems['3DTools-cn-direct']}
                                onChange={() => handleCheckboxChange('3DTools', 'cn-direct')}
                              />
                            </div>
                          </li>
                          <li>
                            <div className={`form-group check-text ${checkedItems['3DTools-blender'] ? 'green-box' : ''}`}>
                              <label htmlFor="blender">Blender</label>
                              <input
                                type="checkbox"
                                id="blender"
                                name="blender"
                                checked={checkedItems['3DTools-blender']}
                                onChange={() => handleCheckboxChange('3DTools', 'blender')}
                              />
                            </div>
                          </li>
                          <li>
                            <div className={`form-group check-text ${checkedItems['3DTools-houdini'] ? 'green-box' : ''}`}>
                              <label htmlFor="houdini">Houdini</label>
                              <input
                                type="checkbox"
                                id="houdini"
                                name="houdini"
                                checked={checkedItems['3DTools-houdini']}
                                onChange={() => handleCheckboxChange('3DTools', 'houdini')}
                              />
                            </div>
                          </li>
                          <li>
                            <div className={`form-group check-text ${checkedItems['3DTools-maya'] ? 'green-box' : ''}`}>
                              <label htmlFor="maya">Maya</label>
                              <input
                                type="checkbox"
                                id="maya"
                                name="maya"
                                checked={checkedItems['3DTools-maya']}
                                onChange={() => handleCheckboxChange('3DTools', 'maya')}
                              />
                            </div>
                          </li>
                          <li>
                            <div className={`form-group check-text ${checkedItems['3DTools-sub-paint'] ? 'green-box' : ''}`}>
                              <label htmlFor="sub-paint">Substance Painter</label>
                              <input
                                type="checkbox"
                                id="sub-paint"
                                name="sub-paint"
                                checked={checkedItems['3DTools-sub-paint']}
                                onChange={() => handleCheckboxChange('3DTools', 'sub-paint')}
                              />
                            </div>
                          </li>
                          <li>
                            <div className={`form-group check-text ${checkedItems['3DTools-z-brush'] ? 'green-box' : ''}`}>
                              <label htmlFor="z-brush">ZBrush</label>
                              <input
                                type="checkbox"
                                id="z-brush"
                                name="z-brush"
                                checked={checkedItems['3DTools-z-brush']}
                                onChange={() => handleCheckboxChange('3DTools', 'z-brush')}
                              />
                            </div>
                          </li>
                          <li>
                            <div className={`form-group check-text ${checkedItems['3DTools-unity'] ? 'green-box' : ''}`}>
                              <label htmlFor="unity">Unity</label>
                              <input
                                type="checkbox"
                                id="unity"
                                name="unity"
                                checked={checkedItems['3DTools-unity']}
                                onChange={() => handleCheckboxChange('3DTools', 'unity')}
                              />
                            </div>
                          </li>
                          <li>
                            <div
                              className={`form-group check-text ${
                                checkedItems['3DTools-unreal-engine'] ? 'green-box' : ''
                              }`}>
                              <label htmlFor="unreal-engine">Unreal Engine</label>
                              <input
                                type="checkbox"
                                id="unreal-engine"
                                name="unreal-engine"
                                checked={checkedItems['3DTools-unreal-engine']}
                                onChange={() => handleCheckboxChange('3DTools', 'unreal-engine')}
                              />
                            </div>
                          </li>
                          <li>
                            <div className={`form-group check-text ${checkedItems['3DTools-spine'] ? 'green-box' : ''}`}>
                              <label htmlFor="spine">Spine 3D</label>
                              <input
                                type="checkbox"
                                id="spine"
                                name="spine"
                                checked={checkedItems['3DTools-spine']}
                                onChange={() => handleCheckboxChange('3DTools', 'spine')}
                              />
                            </div>
                          </li>
                          <li>
                            <div
                              className={`form-group check-text ${checkedItems['3DTools-marvellouse'] ? 'green-box' : ''}`}>
                              <label htmlFor="marvellouse">Marvelous Designer</label>
                              <input
                                type="checkbox"
                                id="marvellouse"
                                name="marvellouse"
                                checked={checkedItems['3DTools-marvellouse']}
                                onChange={() => handleCheckboxChange('3DTools', 'marvellouse')}
                              />
                            </div>
                          </li>
                          <li>
                            <div className={`form-group check-text ${checkedItems['3DTools-spark-ar'] ? 'green-box' : ''}`}>
                              <label htmlFor="spark-ar">Spark AR</label>
                              <input
                                type="checkbox"
                                id="spark-ar"
                                name="spark-ar"
                                checked={checkedItems['3DTools-spark-ar']}
                                onChange={() => handleCheckboxChange('3DTools', 'spark-ar')}
                              />
                            </div>
                          </li>
                        </ul>
                      </div>
                    </li>
                    <li className="grid-box">
                      <div className="check-box">
                        <div
                          className="check-head"
                          onClick={() => {
                            const element6 = document.getElementById('demo6');
                            if (element6) {
                              element6.classList.toggle('show');
                              handleToggle('demo6');
                            }
                          }}>
                          <h4>Generative AI</h4>
                          <IconButton className="drop-icon" aria-label="angle-down">
                            {isOpen.demo6 ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
                          </IconButton>
                        </div>
                        <ul id="demo6" className="collapse">
                          <li>
                            <div
                              className={`form-group check-text ${checkedItems['GenerativeAI-dalla'] ? 'green-box' : ''}`}>
                              <label htmlFor="dalla">DALLA-E</label>
                              <input
                                type="checkbox"
                                id="dalla"
                                name="dalla"
                                checked={checkedItems['GenerativeAI-dalla']}
                                onChange={() => handleCheckboxChange('GenerativeAI', 'dalla')}
                              />
                            </div>
                          </li>
                          <li>
                            <div
                              className={`form-group check-text ${
                                checkedItems['GenerativeAI-midjourney'] ? 'green-box' : ''
                              }`}>
                              <label htmlFor="midjourney">Midjourney</label>
                              <input
                                type="checkbox"
                                id="midjourney"
                                name="midjourney"
                                checked={checkedItems['GenerativeAI-midjourney']}
                                onChange={() => handleCheckboxChange('GenerativeAI', 'midjourney')}
                              />
                            </div>
                          </li>
                          <li>
                            <div
                              className={`form-group check-text ${
                                checkedItems['GenerativeAI-stable-def'] ? 'green-box' : ''
                              }`}>
                              <label htmlFor="stable-def">Stable Diffusion</label>
                              <input
                                type="checkbox"
                                id="stable-def"
                                name="stable-def"
                                checked={checkedItems['GenerativeAI-stable-def']}
                                onChange={() => handleCheckboxChange('GenerativeAI', 'stable-def')}
                              />
                            </div>
                          </li>
                        </ul>
                      </div>
                    </li>
                  </ul>
                </div>
              </Grid>
            </Grid>
          </div>
        </div>
      </div>
      <Box sx={{ padding: '50px', paddingTop: '40px' }}>
        <Box sx={{ textAlign: 'center' }}>
          {/* {activeStep === 1 ? (
            ''
          ) : (
            <Button
              className="common-button-white"
              type="submit"
              variant="contained"
            //   onClick={handleBack}
              disabled={activeStep === 0}
              sx={{
                marginRight: 1,
                mt: 3,
                mb: 2,
                '&:hover': {
                  color: 'var(--Primary, #2CB512)',
                  backgroundColor: '#fff',
                },
                alignItems: 'center',
              }}>
              Back
            </Button>
          )} */}

          {/* <Button
            className="common-button-green"
            type="submit"
            variant="contained"
            onClick={handleToolDetailsData}
            // disabled={activeStep === 10}
            sx={{
              marginLeft: 1,
              mt: 3,
              mb: 2,
              '&:hover': {
                background: 'var(--Primary, #2CB512)',
              },
            }}>
            Save and Next
          </Button> */}
        </Box>
      </Box>
      </Box>
    </>
  );
};

export default PersonalTool;
