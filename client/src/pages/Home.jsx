import React from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useSnapshot } from 'valtio'
import state from '../store'
import {CustomButton} from '../components'


import {
  headContentAnimation,
  headContainerAnimation,
  headTextAnimation,
  slideAnimation
} from '../config/motion'


const Home = () => {

  const snap = useSnapshot(state);
  // console.log(snap.color, snap.textColor);

  // snap.color = "#FFF";

  return (
    <AnimatePresence>
        {
          snap.intro && (
            <motion.section className="home" {...slideAnimation('left')}>
                <motion.header {...slideAnimation('down')} className='max-h-24	'>
                    <img src='./logo-white.png' alt='Logo img' className='w-20 object-contain' />
                </motion.header>

                <motion.div className='home-content' {...headContainerAnimation}>
                  <motion.div  {...headTextAnimation}>
                    <h1 className='head-text text-white'>
                      LET'S <br className='xl:block hidden' />DO IT 
                    </h1>
                  </motion.div>

                  <motion.div className='flex flex-col gap-4' {...headContentAnimation}>
                    <p className='max-w-md font-normal text-white text-base'>
                      Create your unique and exclusive experience with 3D customization tool. <strong>Boost your imagination</strong> and discover your work on real time..
                    </p>

                    <CustomButton
                        type="filled"
                        title='Customize It'
                        handleClick={() => state.intro = false}
                        customStyles='w-fit px-4 py-2.5 font-bold text-sm'
                    ></CustomButton>
                  </motion.div>
                </motion.div>
            </motion.section>
          )
        }
    </AnimatePresence>
  )
}

export default Home