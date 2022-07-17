import React from 'react'
import Image from "next/image"
import { motion } from "framer-motion"
import Logo from "../../components/Logo"

export async function getServerSideProps(context) {
    console.log(context.query) 

    return {
        props: { 
           id: context.query.id,
           name: context.query.name,
           auteur: context.query.auteur,
           img: context.query.img
        }
    }
}

function id(props) {

    console.log(props.img)

        return(
            <div>
                <Logo />

                    <div>
                        <div className="text-center mt-20 sm:mt-10 mb-10 space-y-2">
                            <h1 className="text-white text-5xl font-light tracking-widest">{props.name}</h1>
                            <span className="text-white font-light text-lg tracking-widest">{props.auteur}</span>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-1 items-center justify-center mt-5 mb-10">
                            <motion.div className="cursor-pointer" whileHover={{scale: 1.01}}>
                                <Image width="400px" height="350px" className="object-cover" src={`/${props.id}${props.img}1.jpg`} alt="" />
                            </motion.div>
                            <motion.div whileHover={{scale: 1.01}}>
                                <Image width="400px" height="350px" className="object-cover" src={`/${props.id}${props.img}2.jpg`} alt="" />
                            </motion.div>
                            <motion.div whileHover={{scale: 1.01}}>
                            <Image width="400px" height="350px" className="object-cover" src={`/${props.id}${props.img}3.jpg`} alt="" />
                            </motion.div>
                            <motion.div whileHover={{scale: 1.01}}>
                                <Image width="400px" height="350px" className="object-cover" src={`/${props.id}${props.img}4.jpg`} alt="" />
                            </motion.div>
                            <motion.div whileHover={{scale: 1.01}}>
                                <Image width="400px" height="350px" className="object-cover" src={`/${props.id}${props.img}5.jpg`} alt="" />
                            </motion.div>
                            <motion.div whileHover={{scale: 1.01}}>
                                <Image width="400px" height="350px" className="object-cover" src={`/${props.id}${props.img}6.jpg`} alt="" />
                            </motion.div>
                            <motion.div whileHover={{scale: 1.01}}>
                                <Image width="400px" height="350px" className="object-cover" src={`/${props.id}${props.img}7.jpg`} alt="" />
                            </motion.div>
                            <motion.div whileHover={{scale: 1.01}}>
                                <Image width="400px" height="350px" className="object-cover" src={`/${props.id}${props.img}8.jpg`} alt="" />
                            </motion.div>
                            <motion.div whileHover={{scale: 1.01}}>
                                <Image width="400px" height="350px" className="object-cover" src={`/${props.id}${props.img}9.jpg`} alt="" />
                            </motion.div>
                            <motion.div whileHover={{scale: 1.01}}>
                                <Image width="400px" height="350px" className="object-cover" src={`/${props.id}${props.img}10.jpg`} alt="" />
                            </motion.div>
                            <motion.div whileHover={{scale: 1.01}}>
                                <Image width="400px" height="350px" className="object-cover" src={`/${props.id}${props.img}11.jpg`} alt="" />
                            </motion.div>
                            <motion.div whileHover={{scale: 1.01}}>
                                <Image width="400px" height="350px" className="object-cover" src={`/${props.id}${props.img}12.jpg`} alt="" />
                            </motion.div>
                        </div>
                    </div>
            </div>
        )
}

export default id
