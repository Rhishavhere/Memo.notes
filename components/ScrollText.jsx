import { motion } from "framer-motion"

export default function ScrollText(){
  return(
    <div className="container mx-auto">
      <div className="flex">
        <motion.div className="flex flex-shrink-0"
          initial={{x:0}}
          animate={{x:"-100%"}}
          transition={{duration:5, repeat:Infinity, ease:"linear"}}
        >
          <p>Rich Text Editor</p>
          <p>Work With AI Integration</p>
          <p>Tagging System</p>
        </motion.div>
      </div>
    </div>
  )
}