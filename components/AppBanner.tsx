import React from 'react'
// import { BrandGithub } from 'tabler-icons-react'
import { primaryColor } from '@/config/color'
// import Link from 'next/link'

const AppBanner = () => {
  return (
    <section className="relative hero bg-block2 dark:bg-[#1a1e1b] dark:text-[#797a7d] dark:bg-none  bg-center bg-no-repeat bg-contain flex items-center">
      <div className="px-4 py-8 flex flex-col items-center w-full">
        <p className="text-4xl lg:text-6xl xl:text-8xl text-center mb-8 inline-block">
          <span
            className="inline-block"
            style={{
              color: primaryColor.darken(0.5).alpha(0.9).toString()
            }}
          >
            Conflux BAYC
          </span>{' '}
        </p>
        <p className="inline-block xl:text-4xl font-mono text-xl text-center mb-6 font-bold">
          基于Conflux之上BAYC的数字藏品
        </p>
      </div>
    </section>
  )
}

export default AppBanner
