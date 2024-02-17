import React, { useState } from 'react';
import '../../../Assets/css/Skills.css';
import { Collapse } from 'react-bootstrap';
import { Box, Button, IconButton, Grid } from '@mui/material';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import Info from '../../../Assets/Images/Info.png';
import SelectedInfo from '../../../Assets/Images/SelectedInfo.png';

interface SkillsDetailsProps {
  activeStep: number;
  handleNext: () => void;
  handleBack: () => void;
}

interface CheckedItems {
  [key: string]: boolean;
}

// interface Data {
//   apiResponse: {
//     id: number;
//     name: string;
//     key: string;
//     categoryId: number;
//     information: null | string;
//     isActive: boolean;
//     createdAt: string;
//     updatedAt: string;
//     skillCategory: {
//       id: number;
//       name: string;
//       key: string;
//       isActive: boolean;
//       createdAt: string;
//       updatedAt: string;
//     };
//   }[];
// }

// interface OpenState {
//   demo1: boolean;
//   demo2: boolean;
//   demo3: boolean;
//   demo4: boolean;
//   // Add more keys as needed
// }

const SkillsDetails: React.FC<SkillsDetailsProps> = ({ activeStep, handleNext, handleBack }) => {
  // const [isOpen, setIsOpen] = useState<OpenState>({ demo1: true, demo2: true, demo3: true, demo4: true });
  // const [checkedItems, setCheckedItems] = useState<CheckedItems>({});

  const [isOpen, setIsOpen] = useState<{ [key: string]: boolean }>({});
  const [checkedItems, setCheckedItems] = useState<CheckedItems>({});

  // const apiResponse = [
  //   {
  //     id: 1,
  //     name: 'Creative Direction',
  //     key: 'creativeDirection',
  //     categoryId: 1,
  //     information: null,
  //     isActive: true,
  //     createdAt: '2024-01-02T11:35:09.953Z',
  //     updatedAt: '2024-01-02T11:35:09.953Z',
  //     skillCategory: {
  //       id: 1,
  //       name: 'Director Level',
  //       key: 'directorLevel',
  //       isActive: true,
  //       createdAt: '2024-01-02T11:35:09.937Z',
  //       updatedAt: '2024-01-02T11:35:09.937Z',
  //     },
  //   },
  //   {
  //     id: 2,
  //     name: 'Art Direction',
  //     key: 'artDirection',
  //     categoryId: 1,
  //     information: null,
  //     isActive: true,
  //     createdAt: '2024-01-02T11:35:09.953Z',
  //     updatedAt: '2024-01-02T11:35:09.953Z',
  //     skillCategory: {
  //       id: 1,
  //       name: 'Director Level',
  //       key: 'directorLevel',
  //       isActive: true,
  //       createdAt: '2024-01-02T11:35:09.937Z',
  //       updatedAt: '2024-01-02T11:35:09.937Z',
  //     },
  //   },
  //   {
  //     id: 3,
  //     name: 'Animation Direction',
  //     key: 'animationDirection',
  //     categoryId: 1,
  //     information: null,
  //     isActive: true,
  //     createdAt: '2024-01-02T11:35:09.953Z',
  //     updatedAt: '2024-01-02T11:35:09.953Z',
  //     skillCategory: {
  //       id: 1,
  //       name: 'Director Level',
  //       key: 'directorLevel',
  //       isActive: true,
  //       createdAt: '2024-01-02T11:35:09.937Z',
  //       updatedAt: '2024-01-02T11:35:09.937Z',
  //     },
  //   },
  //   {
  //     id: 4,
  //     name: 'Matte Painting',
  //     key: 'mattePainting',
  //     categoryId: 2,
  //     information: null,
  //     isActive: true,
  //     createdAt: '2024-01-02T11:35:09.953Z',
  //     updatedAt: '2024-01-02T11:35:09.953Z',
  //     skillCategory: {
  //       id: 2,
  //       name: 'Concept Artist',
  //       key: 'conceptArtist',
  //       isActive: true,
  //       createdAt: '2024-01-02T11:35:09.937Z',
  //       updatedAt: '2024-01-02T11:35:09.937Z',
  //     },
  //   },
  //   {
  //     id: 5,
  //     name: 'Concept Art',
  //     key: 'conceptArt',
  //     categoryId: 2,
  //     information: null,
  //     isActive: true,
  //     createdAt: '2024-01-02T11:35:09.953Z',
  //     updatedAt: '2024-01-02T11:35:09.953Z',
  //     skillCategory: {
  //       id: 2,
  //       name: 'Concept Artist',
  //       key: 'conceptArtist',
  //       isActive: true,
  //       createdAt: '2024-01-02T11:35:09.937Z',
  //       updatedAt: '2024-01-02T11:35:09.937Z',
  //     },
  //   },
  //   {
  //     id: 6,
  //     name: 'Storyboard',
  //     key: 'storyboard',
  //     categoryId: 2,
  //     information: null,
  //     isActive: true,
  //     createdAt: '2024-01-02T11:35:09.953Z',
  //     updatedAt: '2024-01-02T11:35:09.953Z',
  //     skillCategory: {
  //       id: 2,
  //       name: 'Concept Artist',
  //       key: 'conceptArtist',
  //       isActive: true,
  //       createdAt: '2024-01-02T11:35:09.937Z',
  //       updatedAt: '2024-01-02T11:35:09.937Z',
  //     },
  //   },
  //   {
  //     id: 7,
  //     name: 'AR/VR',
  //     key: 'arvr',
  //     categoryId: 3,
  //     information: null,
  //     isActive: true,
  //     createdAt: '2024-01-02T11:35:09.953Z',
  //     updatedAt: '2024-01-02T11:35:09.953Z',
  //     skillCategory: {
  //       id: 3,
  //       name: 'Experience Designer',
  //       key: 'experienceDesigner',
  //       isActive: true,
  //       createdAt: '2024-01-02T11:35:09.937Z',
  //       updatedAt: '2024-01-02T11:35:09.937Z',
  //     },
  //   },
  //   {
  //     id: 8,
  //     name: 'Wayfaring',
  //     key: 'wayfaring',
  //     categoryId: 3,
  //     information: null,
  //     isActive: true,
  //     createdAt: '2024-01-02T11:35:09.953Z',
  //     updatedAt: '2024-01-02T11:35:09.953Z',
  //     skillCategory: {
  //       id: 3,
  //       name: 'Experience Designer',
  //       key: 'experienceDesigner',
  //       isActive: true,
  //       createdAt: '2024-01-02T11:35:09.937Z',
  //       updatedAt: '2024-01-02T11:35:09.937Z',
  //     },
  //   },
  //   {
  //     id: 9,
  //     name: 'Concert Visuals',
  //     key: 'concertVisuals',
  //     categoryId: 3,
  //     information: null,
  //     isActive: true,
  //     createdAt: '2024-01-02T11:35:09.953Z',
  //     updatedAt: '2024-01-02T11:35:09.953Z',
  //     skillCategory: {
  //       id: 3,
  //       name: 'Experience Designer',
  //       key: 'experienceDesigner',
  //       isActive: true,
  //       createdAt: '2024-01-02T11:35:09.937Z',
  //       updatedAt: '2024-01-02T11:35:09.937Z',
  //     },
  //   },
  //   {
  //     id: 10,
  //     name: 'Logo Design',
  //     key: 'logoDesign',
  //     categoryId: 4,
  //     information: null,
  //     isActive: true,
  //     createdAt: '2024-01-02T11:35:09.953Z',
  //     updatedAt: '2024-01-02T11:35:09.953Z',
  //     skillCategory: {
  //       id: 4,
  //       name: 'Designer',
  //       key: 'designer',
  //       isActive: true,
  //       createdAt: '2024-01-02T11:35:09.937Z',
  //       updatedAt: '2024-01-02T11:35:09.937Z',
  //     },
  //   },
  //   {
  //     id: 11,
  //     name: 'Brand Design',
  //     key: 'brandDesign',
  //     categoryId: 4,
  //     information: null,
  //     isActive: true,
  //     createdAt: '2024-01-02T11:35:09.953Z',
  //     updatedAt: '2024-01-02T11:35:09.953Z',
  //     skillCategory: {
  //       id: 4,
  //       name: 'Designer',
  //       key: 'designer',
  //       isActive: true,
  //       createdAt: '2024-01-02T11:35:09.937Z',
  //       updatedAt: '2024-01-02T11:35:09.937Z',
  //     },
  //   },
  //   {
  //     id: 12,
  //     name: 'Key Art',
  //     key: 'keyArt',
  //     categoryId: 4,
  //     information: null,
  //     isActive: true,
  //     createdAt: '2024-01-02T11:35:09.953Z',
  //     updatedAt: '2024-01-02T11:35:09.953Z',
  //     skillCategory: {
  //       id: 4,
  //       name: 'Designer',
  //       key: 'designer',
  //       isActive: true,
  //       createdAt: '2024-01-02T11:35:09.937Z',
  //       updatedAt: '2024-01-02T11:35:09.937Z',
  //     },
  //   },
  //   {
  //     id: 13,
  //     name: 'Product Design',
  //     key: 'productDesign',
  //     categoryId: 4,
  //     information: null,
  //     isActive: true,
  //     createdAt: '2024-01-02T11:35:09.953Z',
  //     updatedAt: '2024-01-02T11:35:09.953Z',
  //     skillCategory: {
  //       id: 4,
  //       name: 'Designer',
  //       key: 'designer',
  //       isActive: true,
  //       createdAt: '2024-01-02T11:35:09.937Z',
  //       updatedAt: '2024-01-02T11:35:09.937Z',
  //     },
  //   },
  //   {
  //     id: 14,
  //     name: 'Web Design',
  //     key: 'webDesign',
  //     categoryId: 4,
  //     information: null,
  //     isActive: true,
  //     createdAt: '2024-01-02T11:35:09.953Z',
  //     updatedAt: '2024-01-02T11:35:09.953Z',
  //     skillCategory: {
  //       id: 4,
  //       name: 'Designer',
  //       key: 'designer',
  //       isActive: true,
  //       createdAt: '2024-01-02T11:35:09.937Z',
  //       updatedAt: '2024-01-02T11:35:09.937Z',
  //     },
  //   },
  //   {
  //     id: 15,
  //     name: 'Editorial Illustration',
  //     key: 'editorialIllustration',
  //     categoryId: 5,
  //     information: null,
  //     isActive: true,
  //     createdAt: '2024-01-02T11:35:09.953Z',
  //     updatedAt: '2024-01-02T11:35:09.953Z',
  //     skillCategory: {
  //       id: 5,
  //       name: 'Illustrator',
  //       key: 'illustrator',
  //       isActive: true,
  //       createdAt: '2024-01-02T11:35:09.937Z',
  //       updatedAt: '2024-01-02T11:35:09.937Z',
  //     },
  //   },
  //   {
  //     id: 16,
  //     name: 'Character Design',
  //     key: 'characterDesign',
  //     categoryId: 5,
  //     information: null,
  //     isActive: true,
  //     createdAt: '2024-01-02T11:35:09.953Z',
  //     updatedAt: '2024-01-02T11:35:09.953Z',
  //     skillCategory: {
  //       id: 5,
  //       name: 'Illustrator',
  //       key: 'illustrator',
  //       isActive: true,
  //       createdAt: '2024-01-02T11:35:09.937Z',
  //       updatedAt: '2024-01-02T11:35:09.937Z',
  //     },
  //   },
  //   {
  //     id: 17,
  //     name: 'Environment Design',
  //     key: 'environmentDesign',
  //     categoryId: 5,
  //     information: null,
  //     isActive: true,
  //     createdAt: '2024-01-02T11:35:09.953Z',
  //     updatedAt: '2024-01-02T11:35:09.953Z',
  //     skillCategory: {
  //       id: 5,
  //       name: 'Illustrator',
  //       key: 'illustrator',
  //       isActive: true,
  //       createdAt: '2024-01-02T11:35:09.937Z',
  //       updatedAt: '2024-01-02T11:35:09.937Z',
  //     },
  //   },
  //   {
  //     id: 18,
  //     name: 'Sound Design',
  //     key: 'soundDesign',
  //     categoryId: 6,
  //     information: null,
  //     isActive: true,
  //     createdAt: '2024-01-02T11:35:09.953Z',
  //     updatedAt: '2024-01-02T11:35:09.953Z',
  //     skillCategory: {
  //       id: 6,
  //       name: 'Sound & Music',
  //       key: 'soundMusic',
  //       isActive: true,
  //       createdAt: '2024-01-02T11:35:09.937Z',
  //       updatedAt: '2024-01-02T11:35:09.937Z',
  //     },
  //   },
  //   {
  //     id: 19,
  //     name: 'Composing',
  //     key: 'composing',
  //     categoryId: 6,
  //     information: null,
  //     isActive: true,
  //     createdAt: '2024-01-02T11:35:09.953Z',
  //     updatedAt: '2024-01-02T11:35:09.953Z',
  //     skillCategory: {
  //       id: 6,
  //       name: 'Sound & Music',
  //       key: 'soundMusic',
  //       isActive: true,
  //       createdAt: '2024-01-02T11:35:09.937Z',
  //       updatedAt: '2024-01-02T11:35:09.937Z',
  //     },
  //   },
  //   {
  //     id: 20,
  //     name: 'Music Editing',
  //     key: 'musicEditing',
  //     categoryId: 6,
  //     information: null,
  //     isActive: true,
  //     createdAt: '2024-01-02T11:35:09.953Z',
  //     updatedAt: '2024-01-02T11:35:09.953Z',
  //     skillCategory: {
  //       id: 6,
  //       name: 'Sound & Music',
  //       key: 'soundMusic',
  //       isActive: true,
  //       createdAt: '2024-01-02T11:35:09.937Z',
  //       updatedAt: '2024-01-02T11:35:09.937Z',
  //     },
  //   },
  //   {
  //     id: 21,
  //     name: 'Mixing',
  //     key: 'mixing',
  //     categoryId: 6,
  //     information: null,
  //     isActive: true,
  //     createdAt: '2024-01-02T11:35:09.953Z',
  //     updatedAt: '2024-01-02T11:35:09.953Z',
  //     skillCategory: {
  //       id: 6,
  //       name: 'Sound & Music',
  //       key: 'soundMusic',
  //       isActive: true,
  //       createdAt: '2024-01-02T11:35:09.937Z',
  //       updatedAt: '2024-01-02T11:35:09.937Z',
  //     },
  //   },
  //   {
  //     id: 22,
  //     name: 'VFX Compositing',
  //     key: 'vfxCompositing',
  //     categoryId: 8,
  //     information: null,
  //     isActive: true,
  //     createdAt: '2024-01-02T11:35:09.953Z',
  //     updatedAt: '2024-01-02T11:35:09.953Z',
  //     skillCategory: {
  //       id: 8,
  //       name: 'Compositor/VFX',
  //       key: 'compositorvfx',
  //       isActive: true,
  //       createdAt: '2024-01-02T11:35:09.937Z',
  //       updatedAt: '2024-01-02T11:35:09.937Z',
  //     },
  //   },
  //   {
  //     id: 23,
  //     name: 'CG Compositing',
  //     key: 'cgCompositing',
  //     categoryId: 8,
  //     information: null,
  //     isActive: true,
  //     createdAt: '2024-01-02T11:35:09.953Z',
  //     updatedAt: '2024-01-02T11:35:09.953Z',
  //     skillCategory: {
  //       id: 8,
  //       name: 'Compositor/VFX',
  //       key: 'compositorvfx',
  //       isActive: true,
  //       createdAt: '2024-01-02T11:35:09.937Z',
  //       updatedAt: '2024-01-02T11:35:09.937Z',
  //     },
  //   },
  // ];

  const handleSkillDetailsData = () => {
    console.log('Skill Details');
    handleNext();
  };

  const handleToggle = (key: any) => {
    setIsOpen((prevIsOpen) => ({
      ...prevIsOpen,
      [key]: !prevIsOpen[key],
    }));
  };

  // const handleToggle = (demoKey: keyof OpenState) => {
  //   setIsOpen((prevState) => ({
  //     ...prevState,
  //     [demoKey]: !prevState[demoKey],
  //   }));
  // };

  const handleCheckboxChange = (category: string, itemName: string) => {
    setCheckedItems((prevCheckedItems) => ({
      ...prevCheckedItems,
      [`${category}-${itemName}`]: !prevCheckedItems[`${category}-${itemName}`],
    }));
  };

  return (
    <>
      <div id="app">
        <div style={{ width: '900px', paddingTop: 25 }}>
          <h1
            style={{
              fontSize: '30px',
              fontWeight: 600,
              lineHeight: '38px',
              paddingTop: '30px',
              fontFamily: 'Onest, sans-serif',
            }}>
            Skills
          </h1>
          <p
            style={{
              fontSize: '14px',
              fontWeight: 400,
              lineHeight: '20px',
              paddingTop: '10px',
              color: '#667085',
              fontFamily: 'Onest, sans-serif',
            }}>
            Click on any roles that you can perform (at any level) professionally. Then, click to activate any skills that
            you utilize. Some skills, once clicked, will reveal sub-skills for even greater detail. <br />
            <br />
            Clients often search for specific skills, so make sure to be thorough. Hover over the &apos;?&apos; icon for a
            description of the skill.
          </p>

          <div className="box-content" style={{ fontFamily: 'Onest, sans-serif' }}>
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
                          <h4>Director Level</h4>
                          <IconButton className="drop-icon" aria-label="angle-down">
                            {isOpen.demo1 ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
                          </IconButton>
                        </div>
                        <div id="demo1">
                          <Collapse in={isOpen.demo1}>
                            <ul>
                              <li>
                                <div
                                  className={`form-group check-text ${
                                    checkedItems['DirectorLevel-cr-direct'] ? 'green-box' : ''
                                  }`}>
                                  <input
                                    type="checkbox"
                                    id="cr-direct"
                                    name="cr-direct"
                                    checked={checkedItems['DirectorLevel-cr-direct']}
                                    onChange={() => handleCheckboxChange('DirectorLevel', 'cr-direct')}
                                  />
                                  <label htmlFor="cr-direct">Creative Direction</label>
                                  <img src={checkedItems['DirectorLevel-cr-direct'] ? SelectedInfo : Info} alt="Info" />
                                </div>
                              </li>
                              <li>
                                <div
                                  className={`form-group check-text ${
                                    checkedItems['DirectorLevel-art-direct'] ? 'green-box' : ''
                                  }`}>
                                  <input
                                    type="checkbox"
                                    id="art-direct"
                                    name="art-direct"
                                    checked={checkedItems['DirectorLevel-art-direct']}
                                    onChange={() => handleCheckboxChange('DirectorLevel', 'art-direct')}
                                  />
                                  <label htmlFor="art-direct">Art Direction </label>
                                  <img src={checkedItems['DirectorLevel-art-direct'] ? SelectedInfo : Info} alt="Info" />
                                </div>
                              </li>
                              <li>
                                <div
                                  className={`form-group check-text ${
                                    checkedItems['DirectorLevel-ani-direct'] ? 'green-box' : ''
                                  }`}>
                                  <input
                                    type="checkbox"
                                    id="ani-direct"
                                    name="ani-direct"
                                    checked={checkedItems['DirectorLevel-ani-direct']}
                                    onChange={() => handleCheckboxChange('DirectorLevel', 'ani-direct')}
                                  />
                                  <label htmlFor="ani-direct">Animation Direction</label>
                                  <img src={checkedItems['DirectorLevel-ani-direct'] ? SelectedInfo : Info} alt="Info" />
                                </div>
                              </li>
                              <li>
                                <div
                                  className={`form-group check-text ${
                                    checkedItems['DirectorLevel-liv-direct'] ? 'green-box' : ''
                                  } `}>
                                  <input
                                    type="checkbox"
                                    id="liv-direct"
                                    name="liv-direct"
                                    checked={checkedItems['DirectorLevel-liv-direct']}
                                    onChange={() => handleCheckboxChange('DirectorLevel', 'liv-direct')}
                                  />
                                  <label htmlFor="liv-direct">Live-Action Direction</label>
                                  <img src={checkedItems['DirectorLevel-liv-direct'] ? SelectedInfo : Info} alt="Info" />
                                </div>
                              </li>
                            </ul>
                          </Collapse>
                        </div>
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
                          <h4>Designer</h4>
                          <IconButton className="drop-icon" aria-label="angle-down">
                            {isOpen.demo4 ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
                          </IconButton>
                        </div>
                        <div id="demo4">
                          <Collapse in={isOpen.demo4}>
                            <ul>
                              <li>
                                <div
                                  className={`form-group check-text ${
                                    checkedItems['Designer-logo-design'] ? 'green-box' : ''
                                  }`}>
                                  <input
                                    type="checkbox"
                                    id="logo-design"
                                    name="logo-design"
                                    checked={checkedItems['Designer-logo-design']}
                                    onChange={() => handleCheckboxChange('Designer', 'logo-design')}
                                  />
                                  <label htmlFor="logo-design">Logo-Design</label>
                                  <img src={checkedItems['Designer-logo-design'] ? SelectedInfo : Info} alt="Info" />
                                </div>
                              </li>
                              <li>
                                <div
                                  className={`form-group check-text ${
                                    checkedItems['Designer-brand-design'] ? 'green-box' : ''
                                  }`}>
                                  <input
                                    type="checkbox"
                                    id="brand-design"
                                    name="brand-design"
                                    checked={checkedItems['Designer-brand-design']}
                                    onChange={() => handleCheckboxChange('Designer', 'brand-design')}
                                  />
                                  <label htmlFor="brand-design">Brand-Design</label>
                                  <img src={checkedItems['Designer-brand-design'] ? SelectedInfo : Info} alt="Info" />
                                </div>
                              </li>
                              <li>
                                <div
                                  className={`form-group check-text ${
                                    checkedItems['Designer-key-art-design'] ? 'green-box' : ''
                                  }`}>
                                  <input
                                    type="checkbox"
                                    id="key-art"
                                    name="key-art"
                                    checked={checkedItems['Designer-key-art-design']}
                                    onChange={() => handleCheckboxChange('Designer', 'key-art-design')}
                                  />
                                  <label htmlFor="key-art">Key-Art</label>
                                  <img src={checkedItems['Designer-key-art-design'] ? SelectedInfo : Info} alt="Info" />
                                </div>
                              </li>
                              <li>
                                <div
                                  className={`form-group check-text ${
                                    checkedItems['Designer-product-design'] ? 'green-box' : ''
                                  }`}>
                                  <input
                                    type="checkbox"
                                    id="product-design"
                                    name="product-design"
                                    checked={checkedItems['Designer-product-design']}
                                    onChange={() => handleCheckboxChange('Designer', 'product-design')}
                                  />
                                  <label htmlFor="product-design">Product Design</label>
                                  <img src={checkedItems['Designer-product-design'] ? SelectedInfo : Info} alt="Info" />
                                </div>
                              </li>
                              <li>
                                <div
                                  className={`form-group check-text ${
                                    checkedItems['Designer-presen-design'] ? 'green-box' : ''
                                  }`}>
                                  <input
                                    type="checkbox"
                                    id="presen-design"
                                    name="presen-design"
                                    checked={checkedItems['Designer-presen-design']}
                                    onChange={() => handleCheckboxChange('Designer', 'presen-design')}
                                  />
                                  <label htmlFor="presen-design">Presentation Design</label>
                                  <img src={checkedItems['Designer-presen-design'] ? SelectedInfo : Info} alt="Info" />
                                </div>
                              </li>
                              <li>
                                <div
                                  className={`form-group check-text ${
                                    checkedItems['Designer-edit-design'] ? 'green-box' : ''
                                  }`}>
                                  <input
                                    type="checkbox"
                                    id="edit-design"
                                    name="edit-design"
                                    checked={checkedItems['Designer-edit-design']}
                                    onChange={() => handleCheckboxChange('Designer', 'edit-design')}
                                  />
                                  <label htmlFor="edit-design">Editorial Design</label>
                                  <img src={checkedItems['Designer-edit-design'] ? SelectedInfo : Info} alt="Info" />
                                </div>
                              </li>
                              <li>
                                <div
                                  className={`form-group check-text ${
                                    checkedItems['Designer-package-design'] ? 'green-box' : ''
                                  }`}>
                                  <input
                                    type="checkbox"
                                    id="package-design"
                                    name="package-design"
                                    checked={checkedItems['Designer-package-design']}
                                    onChange={() => handleCheckboxChange('Designer', 'package-design')}
                                  />
                                  <label htmlFor="package-design">Package Design</label>
                                  <img src={checkedItems['Designer-package-design'] ? SelectedInfo : Info} alt="Info" />
                                </div>
                              </li>
                              <li>
                                <div
                                  className={`form-group check-text ${
                                    checkedItems['Designer-web-design'] ? 'green-box' : ''
                                  } `}>
                                  <input
                                    type="checkbox"
                                    id="web-design"
                                    name="web-design"
                                    checked={checkedItems['Designer-web-design']}
                                    onChange={() => handleCheckboxChange('Designer', 'web-design')}
                                  />
                                  <label htmlFor="web-design">Web Design</label>
                                  <img src={checkedItems['Designer-web-design'] ? SelectedInfo : Info} alt="Info" />
                                </div>
                              </li>
                            </ul>
                          </Collapse>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className="check-box">
                        <div
                          className="check-head"
                          onClick={() => {
                            const element7 = document.getElementById('demo7');
                            if (element7) {
                              element7.classList.toggle('show');
                            }
                          }}>
                          <h4>Motion Designer</h4>
                          <IconButton className="drop-icon" aria-label="angle-down">
                            {isOpen ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
                          </IconButton>
                        </div>
                        <ul id="demo7" className="collapse"></ul>
                      </div>
                    </li>
                  </ul>
                </div>
              </Grid>
              <Grid item sm={4}>
                <div className="list-box">
                  <ul style={{ paddingLeft: 0 }}>
                    <li>
                      <div className="check-box">
                        <div
                          className="check-head"
                          onClick={() => {
                            const element2 = document.getElementById('demo2');
                            if (element2) {
                              element2.classList.toggle('show');
                              // setIsOpen(!isOpen.demo1);
                              handleToggle('demo2');
                            }
                          }}>
                          <h4>Concept Artist</h4>
                          <IconButton className="drop-icon" aria-label="angle-down">
                            {isOpen.demo2 ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
                          </IconButton>
                        </div>
                        <ul id="demo2" className="collapse">
                          <li>
                            <div
                              className={`form-group check-text ${
                                checkedItems['ConceptArtist-mt-paint'] ? 'green-box' : ''
                              }`}>
                              <input
                                type="checkbox"
                                id="mt-paint"
                                name="mt-paint"
                                checked={checkedItems['ConceptArtist-mt-paint']}
                                onChange={() => handleCheckboxChange('ConceptArtist', 'mt-paint')}
                              />
                              <label htmlFor="mt-paint">Matte Painting</label>
                              <img src={checkedItems['ConceptArtist-mt-paint'] ? SelectedInfo : Info} alt="Info" />
                            </div>
                          </li>
                          <li>
                            <div
                              className={`form-group check-text ${
                                checkedItems['ConceptArtist-conc-art'] ? 'green-box' : ''
                              }`}>
                              <input
                                type="checkbox"
                                id="conc-art"
                                name="conc-art"
                                checked={checkedItems['ConceptArtist-conc-art']}
                                onChange={() => handleCheckboxChange('ConceptArtist', 'conc-art')}
                              />
                              <label htmlFor="conc-art">Concept Art</label>
                              <img src={checkedItems['ConceptArtist-conc-art'] ? SelectedInfo : Info} alt="Info" />
                            </div>
                          </li>
                          <li>
                            <div
                              className={`form-group check-text ${
                                checkedItems['ConceptArtist-visual-devlp'] ? 'green-box' : ''
                              }`}>
                              <input
                                type="checkbox"
                                id="visual-devlp"
                                name="visual-devlp"
                                checked={checkedItems['ConceptArtist-visual-devlp']}
                                onChange={() => handleCheckboxChange('ConceptArtist', 'visual-devlp')}
                              />
                              <label htmlFor="visual-devlp">Visual Development</label>
                              <img src={checkedItems['ConceptArtist-visual-devlp'] ? SelectedInfo : Info} alt="Info" />
                            </div>
                          </li>
                          <li>
                            <div
                              className={`form-group check-text ${
                                checkedItems['ConceptArtist-script-key'] ? 'green-box' : ''
                              }`}>
                              <input
                                type="checkbox"
                                id="script-key"
                                name="script-key"
                                checked={checkedItems['ConceptArtist-script-key']}
                                onChange={() => handleCheckboxChange('ConceptArtist', 'script-key')}
                              />
                              <label htmlFor="script-key">Color Scripts & Keys</label>
                              <img src={checkedItems['ConceptArtist-script-key'] ? SelectedInfo : Info} alt="Info" />
                            </div>
                          </li>
                          <li>
                            <div
                              className={`form-group check-text ${
                                checkedItems['ConceptArtist-strybord'] ? 'green-box' : ''
                              }`}>
                              <input
                                type="checkbox"
                                id="strybord"
                                name="strybord"
                                checked={checkedItems['ConceptArtist-strybord']}
                                onChange={() => handleCheckboxChange('ConceptArtist', 'strybord')}
                              />
                              <label htmlFor="strybord">Storyboarding</label>
                              <img src={checkedItems['ConceptArtist-strybord'] ? SelectedInfo : Info} alt="Info" />
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
                            const element5 = document.getElementById('demo5');
                            if (element5) {
                              element5.classList.toggle('show');
                              handleToggle('demo5');
                            }
                          }}>
                          <h4>Illustrator</h4>
                          <IconButton className="drop-icon" aria-label="angle-down">
                            {isOpen.demo5 ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
                          </IconButton>
                        </div>
                        <ul id="demo5" className="collapse">
                          <li>
                            <div
                              className={`form-group check-text ${
                                checkedItems['Illustrator-edit-ittus'] ? 'green-box' : ''
                              }`}>
                              <input
                                type="checkbox"
                                id="edit-ittus"
                                name="edit-ittus"
                                checked={checkedItems['Illustrator-edit-ittus']}
                                onChange={() => handleCheckboxChange('Illustrator', 'edit-ittus')}
                              />
                              <label htmlFor="edit-ittus">Editorial Illustration</label>
                              <img src={checkedItems['Illustrator-edit-ittus'] ? SelectedInfo : Info} alt="Info" />
                            </div>
                          </li>
                          <li>
                            <div
                              className={`form-group check-text ${
                                checkedItems['Illustrator-char-design'] ? 'green-box' : ''
                              }`}>
                              <input
                                type="checkbox"
                                id="char-design"
                                name="char-design"
                                checked={checkedItems['Illustrator-char-design']}
                                onChange={() => handleCheckboxChange('Illustrator', 'char-design')}
                              />
                              <label htmlFor="char-design">Character Design</label>
                              <img src={checkedItems['Illustrator-char-design'] ? SelectedInfo : Info} alt="Info" />
                            </div>
                          </li>
                          <li>
                            <div
                              className={`form-group check-text ${
                                checkedItems['Illustrator-hand-design'] ? 'green-box' : ''
                              }`}>
                              <input
                                type="checkbox"
                                id="hand-design"
                                name="hand-design"
                                checked={checkedItems['Illustrator-hand-design']}
                                onChange={() => handleCheckboxChange('Illustrator', 'hand-design')}
                              />
                              <label htmlFor="hand-design">Hand Lettering</label>
                              <img src={checkedItems['Illustrator-hand-design'] ? SelectedInfo : Info} alt="Info" />
                            </div>
                          </li>
                          <li>
                            <div
                              className={`form-group check-text ${
                                checkedItems['Illustrator-envi-design'] ? 'green-box' : ''
                              }`}>
                              <input
                                type="checkbox"
                                id="envi-design"
                                name="envi-design"
                                checked={checkedItems['Illustrator-envi-design']}
                                onChange={() => handleCheckboxChange('Illustrator', 'envi-design')}
                              />
                              <label htmlFor="envi-design">Environment Design</label>
                              <img src={checkedItems['Illustrator-envi-design'] ? SelectedInfo : Info} alt="Info" />
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
                            const element8 = document.getElementById('demo8');
                            if (element8) {
                              element8.classList.toggle('show');
                              // setIsOpen(!isOpen.demo1);
                              handleToggle('demo8');
                            }
                          }}>
                          <h4>Compositor / VFX</h4>
                          <IconButton className="drop-icon" aria-label="angle-down">
                            {isOpen.demo8 ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
                          </IconButton>
                        </div>
                        <ul id="demo8" className="collapse">
                          <li>
                            <div
                              className={`form-group check-text ${
                                checkedItems['CompositorVFX-vfx-compositing'] ? 'green-box' : ''
                              } `}>
                              <input
                                type="checkbox"
                                id="vfx-compositing"
                                name="vfx-compositing"
                                checked={checkedItems['CompositorVFX-vfx-compositing']}
                                onChange={() => handleCheckboxChange('CompositorVFX', 'vfx-compositing')}
                              />
                              <label htmlFor="vfx-compositing">VFX Compositing</label>
                              <img src={checkedItems['CompositorVFX-vfx-compositing'] ? SelectedInfo : Info} alt="Info" />
                            </div>
                          </li>
                          <li>
                            <div
                              className={`form-group check-text ${
                                checkedItems['CompositorVFX-vfx-supervision'] ? 'green-box' : ''
                              }`}>
                              <input
                                type="checkbox"
                                id="vfx-supervision"
                                name="vfx-supervision"
                                checked={checkedItems['CompositorVFX-vfx-supervision']}
                                onChange={() => handleCheckboxChange('CompositorVFX', 'vfx-supervision')}
                              />
                              <label htmlFor="vfx-supervision">VFX Supervision</label>
                              <img src={checkedItems['CompositorVFX-vfx-supervision'] ? SelectedInfo : Info} alt="Info" />
                            </div>
                          </li>
                          <li>
                            <div
                              className={`form-group check-text ${
                                checkedItems['CompositorVFX-cg-compositing'] ? 'green-box' : ''
                              }`}>
                              <input
                                type="checkbox"
                                id="cg-compositing"
                                name="cg-compositing"
                                checked={checkedItems['CompositorVFX-cg-compositing']}
                                onChange={() => handleCheckboxChange('CompositorVFX', 'cg-compositing')}
                              />
                              <label htmlFor="cg-compositing">CG Compositing</label>
                              <img src={checkedItems['CompositorVFX-cg-compositing'] ? SelectedInfo : Info} alt="Info" />
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
                            const element9 = document.getElementById('demo9');
                            if (element9) {
                              element9.classList.toggle('show');
                              // setIsOpen(!isOpen.demo1);
                              handleToggle('demo9');
                            }
                          }}>
                          <h4>Video Editor</h4>
                          <IconButton className="drop-icon" aria-label="angle-down">
                            {isOpen.demo9 ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
                          </IconButton>
                        </div>
                        <ul id="demo9" className="collapse"></ul>
                      </div>
                    </li>
                  </ul>
                </div>
              </Grid>
              <Grid item sm={4}>
                <div className="list-box">
                  <ul style={{ paddingLeft: 0 }}>
                    <li>
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
                          <h4>Experience Designer</h4>
                          <IconButton className="drop-icon" aria-label="angle-down">
                            {isOpen.demo3 ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
                          </IconButton>
                        </div>
                        <ul id="demo3" className="collapse">
                          <li>
                            <div
                              className={`form-group check-text ${
                                checkedItems['ExperienceDesigner-ar-vr'] ? 'green-box' : ''
                              }`}>
                              <input
                                type="checkbox"
                                id="ar-vr"
                                name="ar-vr"
                                checked={checkedItems['ExperienceDesigner-ar-vr']}
                                onChange={() => handleCheckboxChange('ExperienceDesigner', 'ar-vr')}
                              />
                              <label htmlFor="ar-vr">AR/VR</label>
                              <img src={checkedItems['ExperienceDesigner-ar-vr'] ? SelectedInfo : Info} alt="Info" />
                            </div>
                          </li>
                          <li>
                            <div
                              className={`form-group check-text ${
                                checkedItems['ExperienceDesigner-way-finding'] ? 'green-box' : ''
                              }`}>
                              <input
                                type="checkbox"
                                id="way-finding"
                                name="way-finding"
                                checked={checkedItems['ExperienceDesigner-way-finding']}
                                onChange={() => handleCheckboxChange('ExperienceDesigner', 'way-finding')}
                              />
                              <label htmlFor="way-finding">Wayfinding</label>
                              <img src={checkedItems['ExperienceDesigner-way-finding'] ? SelectedInfo : Info} alt="Info" />
                            </div>
                          </li>
                          <li>
                            <div
                              className={`form-group check-text ${
                                checkedItems['ExperienceDesigner-exhi-design'] ? 'green-box' : ''
                              }`}>
                              <input
                                type="checkbox"
                                id="exhi-design"
                                name="exhi-design"
                                checked={checkedItems['ExperienceDesigner-exhi-design']}
                                onChange={() => handleCheckboxChange('ExperienceDesigner', 'exhi-design')}
                              />
                              <label htmlFor="exhi-design">Exhibition Design</label>
                              <img src={checkedItems['ExperienceDesigner-exhi-design'] ? SelectedInfo : Info} alt="Info" />
                            </div>
                          </li>
                          <li>
                            <div
                              className={`form-group check-text ${
                                checkedItems['ExperienceDesigner-conc-visual'] ? 'green-box' : ''
                              }`}>
                              <input
                                type="checkbox"
                                id="conc-visual"
                                name="conc-visual"
                                checked={checkedItems['ExperienceDesigner-conc-visual']}
                                onChange={() => handleCheckboxChange('ExperienceDesigner', 'conc-visual')}
                              />
                              <label htmlFor="conc-visual">Concert-Visuals</label>
                              <img src={checkedItems['ExperienceDesigner-conc-visual'] ? SelectedInfo : Info} alt="Info" />
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
                            const element6 = document.getElementById('demo6');
                            if (element6) {
                              element6.classList.toggle('show');
                              handleToggle('demo6');
                            }
                          }}>
                          <h4>Sound & Music</h4>
                          <IconButton className="drop-icon" aria-label="angle-down">
                            {isOpen.demo6 ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
                          </IconButton>
                        </div>
                        <ul id="demo6" className="collapse">
                          <li>
                            <div
                              className={`form-group check-text ${
                                checkedItems['SoundMusic-sound-design'] ? 'green-box' : ''
                              }`}>
                              <input
                                type="checkbox"
                                id="sound-design"
                                name="sound-design"
                                checked={checkedItems['SoundMusic-sound-design']}
                                onChange={() => handleCheckboxChange('SoundMusic', 'sound-design')}
                              />
                              <label htmlFor="sound-design">Sound Design</label>
                              <img src={checkedItems['SoundMusic-sound-design'] ? SelectedInfo : Info} alt="Info" />
                            </div>
                          </li>
                          <li>
                            <div
                              className={`form-group check-text ${checkedItems['SoundMusic-composing'] ? 'green-box' : ''}`}>
                              <input
                                type="checkbox"
                                id="composing"
                                name="composing"
                                checked={checkedItems['SoundMusic-composing']}
                                onChange={() => handleCheckboxChange('SoundMusic', 'composing')}
                              />
                              <label htmlFor="composing">Composing</label>
                              <img src={checkedItems['SoundMusic-composing'] ? SelectedInfo : Info} alt="Info" />
                            </div>
                          </li>
                          <li>
                            <div
                              className={`form-group check-text ${
                                checkedItems['SoundMusic-music-editing'] ? 'green-box' : ''
                              }`}>
                              <input
                                type="checkbox"
                                id="music-editing"
                                name="music-editing"
                                checked={checkedItems['SoundMusic-music-editing']}
                                onChange={() => handleCheckboxChange('SoundMusic', 'music-editing')}
                              />
                              <label htmlFor="music-editing">Music Editing</label>
                              <img src={checkedItems['SoundMusic-music-editing'] ? SelectedInfo : Info} alt="Info" />
                            </div>
                          </li>
                          <li>
                            <div
                              className={`form-group check-text ${
                                checkedItems['SoundMusic-music-super'] ? 'green-box' : ''
                              }`}>
                              <input
                                type="checkbox"
                                id="music-super"
                                name="music-super"
                                checked={checkedItems['SoundMusic-music-super']}
                                onChange={() => handleCheckboxChange('SoundMusic', 'music-super')}
                              />
                              <label htmlFor="music-super">Music Supervision</label>
                              <img src={checkedItems['SoundMusic-music-super'] ? SelectedInfo : Info} alt="Info" />
                            </div>
                          </li>
                          <li>
                            <div className={`form-group check-text ${checkedItems['SoundMusic-mixing'] ? 'green-box' : ''}`}>
                              <input
                                type="checkbox"
                                id="mixing"
                                name="mixing"
                                checked={checkedItems['SoundMusic-mixing']}
                                onChange={() => handleCheckboxChange('SoundMusic', 'mixing')}
                              />
                              <label htmlFor="mixing">Mixing</label>
                              <img src={checkedItems['SoundMusic-mixing'] ? SelectedInfo : Info} alt="Info" />
                            </div>
                          </li>
                          <li>
                            <div
                              className={`form-group check-text ${
                                checkedItems['SoundMusic-voice-record'] ? 'green-box' : ''
                              }`}>
                              <input
                                type="checkbox"
                                id="voice-record"
                                name="voice-record"
                                checked={checkedItems['SoundMusic-voice-record']}
                                onChange={() => handleCheckboxChange('SoundMusic', 'voice-record')}
                              />
                              <label htmlFor="voice-record">Voiceover Recording</label>
                              <img src={checkedItems['SoundMusic-voice-record'] ? SelectedInfo : Info} alt="Info" />
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
                            const element10 = document.getElementById('demo10');
                            if (element10) {
                              element10.classList.toggle('show');
                              handleToggle('demo10');
                            }
                          }}>
                          <h4>3D Artist</h4>
                          <IconButton className="drop-icon" aria-label="angle-down">
                            {isOpen.demo10 ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
                          </IconButton>
                        </div>
                        <ul id="demo10" className="collapse"></ul>
                      </div>
                    </li>
                  </ul>
                </div>
              </Grid>
            </Grid>
          </div>

          {/* <div className="box-content">
            <Grid container>
              <Grid item sm={4}>
                <div className="list-box">
                  <ul>
                    {apiResponse.map((item) => (
                      <li key={item.id}>
                        <div className="check-box">
                          <div className="check-head" onClick={() => handleToggle(item.skillCategory.key)}>
                            <h4>{item.skillCategory.name}</h4>
                            <IconButton className="drop-icon" aria-label="angle-down">
                              {isOpen[item.skillCategory.key] ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
                            </IconButton>
                          </div>
                          <div id={item.skillCategory.key}>
                            <Collapse in={isOpen[item.skillCategory.key]}>
                              <ul>
                                <li>
                                  <div
                                    className={`form-group check-text ${
                                      checkedItems[`${item.skillCategory.key}-${item.key}`] ? 'green-box' : ''
                                    }`}>
                                    <input
                                      type="checkbox"
                                      id={`${item.key}`}
                                      name={`${item.key}`}
                                      checked={checkedItems[`${item.skillCategory.key}-${item.key}`]}
                                      onChange={() => handleCheckboxChange(item.skillCategory.key, item.key)}
                                    />
                                    <label htmlFor={`${item.key}`}>{item.name}</label>
                                    <img
                                      src={checkedItems[`${item.skillCategory.key}-${item.key}`] ? SelectedInfo : Info}
                                      alt="Info"
                                    />
                                  </div>
                                </li>
                              </ul>
                            </Collapse>
                          </div>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </Grid>
            </Grid>
          </div> */}
        </div>
      </div>
      <Box sx={{ padding: '50px', paddingTop: '40px' }}>
        <Box sx={{ textAlign: 'center' }}>
          {activeStep === 1 ? (
            ''
          ) : (
            <Button
              className="common-button-white"
              type="submit"
              variant="contained"
              onClick={handleBack}
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
          )}

          <Button
            className="common-button-green"
            type="submit"
            variant="contained"
            onClick={handleSkillDetailsData}
            sx={{
              marginLeft: 1,
              mt: 3,
              mb: 2,
              '&:hover': {
                background: 'var(--Primary, #2CB512)',
              },
            }}>
            Save and Next
          </Button>
        </Box>
      </Box>
    </>
  );
};

export default SkillsDetails;
