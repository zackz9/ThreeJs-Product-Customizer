import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useSnapshot } from 'valtio'
import state from '../store'
import config from '../config/config'
import { download } from '../assets'
import { downloadCanvasToImage, reader } from '../config/helpers'
import { EditorTabs, FilterTabs, DecalTypes, } from '../config/constants'
import { fadeAnimation, slideAnimation } from '../config/motion'

import { CustomButton, AIPicker, FilePicker, Tab, ColorPicker } from '../components'

const Customizer = () => {

  const snap = useSnapshot(state);

  const [file, setFile] = useState('')

  const [prompt, setPrompt] = useState('')
  const [generatingImg, setGeneratingImg] = useState(false)

  const [activeEditorTab, setActiveEditorTab] = useState('')
  const [activeFilterTab, setActiveFilterTab] = useState({ logoProduct: true, stylishProduct: false })


  // showing tab content depending on the active one 
  const generatingTabContent = () => {

    switch (activeEditorTab) {
      case 'colorpicker':
        return <ColorPicker />
        break;

      case 'filepicker':
        return <FilePicker file={file} setFile={setFile} readingFile={readingFile} />
        break;
      // case 'aipicker':
      //   return <AIPicker
      //     prompt={prompt}
      //     setPrompt={setPrompt}
      //     generatingImg={generatingImg}
      //     handleSubmit={handleSubmit}
      //   />
      //   break;

      default:
        null;
    }

  }


  const handleSubmit = async (type) => {
    if (!prompt) return alert('Please tape a good prompt !')

    try {
      // Call ai image to generate prompt
      setGeneratingImg(true);


      const response = await fetch('http://localhost:8080/api/v1/dalle', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          prompt
        })
      })

      const data = await response.json();
      
      console.log(data, data.photo, type);

      handleDecals(type, `data:image/png;base64,${data.photo}`)

    } catch (error) {
      alert(error)
    } finally {
      setGeneratingImg(false);
      setActiveEditorTab('')
    }
  }

  const handleDecals = (type, result) => {

    const decalType = DecalTypes[type];

    state[decalType.stateProperty] = result;

    if (!activeFilterTab[decalType.filterTab]) {
      handleActiveFilterTab(decalType.filterTab)
    }
  }

  const handleActiveFilterTab = (tabName) => {

    switch (tabName) {
      case 'logoProduct':
        state.isLogoTexture = !activeFilterTab[tabName];
        break;
      case 'stylishProduct':
        state.isFullTexture = !activeFilterTab[tabName];
        break;

      default:
        state.isLogoTexture = true;
        state.isFullTexture = false;
    }

    // Setting the activeFilterTab in UI after setting the state

    setActiveFilterTab((prevState) => {
      return {
        ...prevState,
        [tabName]: !prevState[tabName]
      }
    })

  }


  const readingFile = (type) => {
    reader(file).then((result) => {
      handleDecals(type, result);
      setActiveEditorTab('');
    })
  }

  return (
    <AnimatePresence>
      {
        !snap.intro && (
          <>
            <motion.div
              key='custom'
              className='absolute top-0 left-0 z-10'
              {...slideAnimation('left')}
            >
              <div className='flex items-center min-h-screen'>
                <div className='editortabs-container tabs'>
                  {
                    EditorTabs.map((tab) => (
                      <Tab
                        key={tab.name}
                        tab={tab}
                        handleClick={() => setActiveEditorTab(tab.name)}
                      ></Tab>
                    ))
                  }

                  {generatingTabContent()}
                </div>
              </div>
            </motion.div>

            <motion.div
              className='absolute z-10 top-5 right-5'
              {...fadeAnimation}
            >
              <CustomButton
                type='filled'
                title="Back"
                handleClick={() => state.intro = true}
                customStyles='w-fit px-4 py-2.5 font-bold text-sm'
              ></CustomButton>
            </motion.div>

            <motion.div
              className='filtertabs-container'
              {...slideAnimation('up')}
            >
              {
                FilterTabs.map((tab) => (
                  <Tab
                    key={tab.name}
                    tab={tab}
                    handleClick={() => handleActiveFilterTab(tab.name)}
                    isFilterTab
                    isActiveTab={activeFilterTab[tab.name]}
                  ></Tab>
                ))
              }

            </motion.div>
          </>
        )
      }
    </AnimatePresence>
  )
}

export default Customizer