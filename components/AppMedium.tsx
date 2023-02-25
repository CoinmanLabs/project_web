import React, { useEffect } from 'react'
import Aos from 'aos'
import { Card, Text, Button, Group } from '@mantine/core'
import { primaryColor } from '@/config/color'
import Image from 'next/image'
import { useRouter } from 'next/router'

const SEP = process.env.sep

const AppMedium = () => {
  useEffect(() => {
    Aos.init({
      duration: 1000
    })
  }, [])

  const router = useRouter()

  return (
    <section className="w-full dark:bg-[#1a1b1e] lg:p-6 p-4 md:h-[500px] h-auto">
      <h1
        data-aos="fade-up"
        className="font-mono mb-24 md:text-3xl text-xl capitalize text-center font-bold "
        style={{ color: primaryColor.darken(0.5).toString() }}
      >
        unique REC-721
      </h1>
      <div className="grid md:grid-cols-3 grid-cols-1 md:gap-6 gap-3">
        <section className="border p-10">
          <Card data-aos="fade-up" shadow="none" p="md" data-aos-delay="0">
            <Card.Section className="flex justify-center">
              <Image
                src="/assets/svg/apacheflink.svg"
                alt="flink"
                width={70}
                height={70}
                className="object-contain"
              />
            </Card.Section>

            <Group position="apart" className="my-3 text-center">
              <Text
                weight={500}
                className="font-bold w-full text-lg capitalize"
              >
                Conflux based
              </Text>
            </Group>

            <Text
              size="md"
              className="text-gray-600 leading-6 text-center capitalize"
            >
              onflux enables creators, communities, and markets to connect across borders and protocols
            </Text>
            <a href="https://confluxnetwork.org/">
            <Button
              variant="light"
              color="green"
              fullWidth
              // onClick={() => router.push(`/documents/快速开始`)}
              className="underline mt-[14px]"
            >
              Conflux Website
            </Button>
            </a>
          </Card>
        </section>
        <section className="border p-10">
          <Card data-aos="fade-up" shadow="none" p="md" data-aos-delay="150">
            <Card.Section className="flex justify-center">
              <Image
                src="/assets/svg/docker.svg"
                alt="flink"
                width={70}
                height={70}
                className="object-contain"
              />
            </Card.Section>

            <Group position="apart" className="my-3 text-center">
              <Text
                weight={500}
                className="font-bold w-full text-lg capitalize"
              >
                介绍
              </Text>
            </Group>

            <Text
              size="md"
              className="text-gray-600 leading-6 text-center capitalize"
            >
              特点介绍
            </Text>

            <Button
              variant="light"
              color="blue"
              fullWidth
              className="mt-[14px] underline"
            >
              特点介绍
            </Button>
          </Card>
        </section>
        <section className="border p-10">
          <Card data-aos="fade-up" shadow="none" p="md" data-aos-delay="300">
            <Card.Section className="flex justify-center">
              <Image
                src="/assets/svg/flex.svg"
                alt="flink"
                width={70}
                height={70}
                className="object-contain"
              />
            </Card.Section>

            <Group position="apart" className="my-3 text-center">
              <Text
                weight={500}
                className="font-bold w-full text-lg capitalize"
              >
               特点介绍
              </Text>
            </Group>

            <Text
              size="md"
              className="text-gray-600 leading-6 text-center capitalize"
            >
              特点介绍
            </Text>

            <Button
              variant="light"
              color="violet"
              fullWidth
              onClick={() =>
                router.push(`/documents/开发者指南${SEP}如何自定义插件`)
              }
              className="underline mt-[14px]"
            >
             特点介绍
            </Button>
          </Card>
        </section>
      </div>
    </section>
  )
}

export default AppMedium
