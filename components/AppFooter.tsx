import React from 'react'
import { Card, Text } from '@mantine/core'
import Link from 'next/link'
import Image from 'next/image'
import { primaryColor } from '@/config/color'
const AppFooter = () => {
  return (
    <section
      className="text-white pt-[100px] pb-[20px] z-[1000]"
      style={{
        backgroundColor: primaryColor.darken(0.7).toString()
      }}
    >
      <div className="text-white  flex flex-col md:flex-row justify-center">
        <div className="  w-full flex justify-center items-center bg-block bg-contain bg-center bg-no-repeat">
          <Card component="a" className="bg-transparent">
            <Text pt={20} weight={500} className="text-center text-gray-300">
              联系我们
            </Text>
          </Card>
        </div>
        <div className="h-full bg-block2 bg-no-repeat bg-center bg-contain w-full flex justify-center items-center">
          <div className="flex md:space-x-12 space-x-6">
            <div className="text-center">
              <h3 className="mb-5 text-[20px]">路线图</h3>
              <ul className="flex flex-col space-y-2 text-[13px] text-gray-300">
                <Link href="/documents/快速开始">
                  <a>快速开始</a>
                </Link>
              </ul>
            </div>
            <div className="text-center">
              <h3 className="mb-5 text-[20px]">社区</h3>
              <ul className="flex flex-col space-y-2 text-[13px] text-gray-300">
                <a href="https://github.com/DTStack/chunjun/issues">
                  twitter
                </a>
                <a href="https://github.com/DTStack/chunjun/pulls">
                  discord
                </a>
              </ul>
            </div>
            <div className="text-center">
              <h3 className="mb-5 text-[20px]">更多</h3>
              <ul className="flex flex-col text-[13px] space-y-2 text-gray-300">
                <Link href="/">
                  <a>博客</a>
                </Link>
                <a href="#">Github</a>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="pt-[20px]  text-white text-base flex justify-center items-center text-center">
      </div>
    </section>
  )
}

export default AppFooter