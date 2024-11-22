import { Body, Button, Container, Column, Head, Hr, Html, Img, Link, Preview, Row, Section, Text } from '@react-email/components'
import { Tailwind } from '@react-email/tailwind'
import * as React from 'react'

interface WelcomeEmailProps {
  name: string
}

export const WelcomeEmail = ({ name }: WelcomeEmailProps) => {
  return (
    <Html>
      <Head />
      <Preview>Hello {name}. Thank you for connecting me!</Preview>
      <Tailwind>
        <Body>
          <Container className='mx-auto max-w-sm px-4 font-sans'>
            <Section className='mt-[32px]"'>
              <Img
                src={`https://utfs.io/f/37877d5b-98d5-4e9b-ab7e-a9f5edb27afc-1zbfv.png`}
                width='100'
                height='100'
                alt='Chanin Law'
                className='my-0 mx-auto'
              />
            </Section>
            <h1 className='text-3xl font-extrabold text-blue-600'>Let&apos;s Connect!</h1>
            <Text className='mt-2 text-gray-600'>Have a question or just want to say hi? Drop us a message!</Text>
            <Section className='mt-8 space-y-4 text-sm'>
              <Text className='text-blue-600'>Hi, {name}</Text>
              <Text className='text-blue-600'>Awesome to hear from you! Your message is received and we&apos;ll be in touch super soon!</Text>
              <Text className='text-blue-600'>
                Cheers,
                <br />
                Chanin L.
              </Text>
            </Section>
            <Hr className='border border-solid border-[#eaeaea] my-[26px] mx-0 w-full' />
            <Section className='mt-8 space-y-4 text-sm'>
              <Text className='text-gray-600 '>For urgent matters, Textlease contact me at chaninlawlert@gmail.com</Text>
              <Text className='text-gray-600 '>I typically respond to emails within 24 hours.</Text>
              <Text className='text-gray-600 '>Looking forward to hearing from you!</Text>
            </Section>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  )
}

WelcomeEmail.PreviewProps = {
  name: 'Chanin',
  email: 'chaninlawlert@gmail.com'
} as WelcomeEmailProps

export default WelcomeEmail
