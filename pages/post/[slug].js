// [slug].js
import groq from 'groq';
import {PortableText} from '@portabletext/react';
import imageUrlBuilder from '@sanity/image-url';
import client from '../../client'
import Image from 'next/image'
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

function urlFor (source) {
  return imageUrlBuilder(client).image(source)
}

const ptComponents = {
  types: {
    image: ({ value }) => {
      if (!value?.asset?._ref) {
        return null
      }
      return (
        <img
          alt={value.alt || ' '}
          loading="lazy"
          src={urlFor(value).width(320).height(240).fit('max').auto('format')}
        />
      )
    }
  }
}

const Post = ({ post}) => {
  const {
    title,
    id,
    categories,
    currencies,
    mainImage,
    url,
    body = []
  } = post || {};

  return (
    <div className=''>
        <article className='bg-gray-100 w-full p-5 px-5'>

          <div className='md:flex md:space-x-4 space-y-4 md:space-y-0'>
          {/* left section */}
          <div className='bg-white md:w-5/12 rounded'>
            
          <img className='w-full' src={urlFor(mainImage).url()}
            width='500'
            height='500' 
            alt="Mainn Image"/>
          {/* text section */}
            <div className='px-5 py-3 space-y-2'>
            <h1 className='text-2xl'>{title}</h1>
              {categories && (
              <ul className='text-sm'>
                {categories?.map((category, id) => <li key={id}>{category}</li>)}
              </ul>
            )}
            <hr></hr>
            <p className='text-sm text-gray-500'>{title} akzeptiert</p>
            <div className='flex space-x-3'>
            {currencies?.map((currency, id) => <img className='pb-2' key={id} src={urlFor(currency).width(35).height(35).url()} alt="Descriptive alt text that has been set on your images" />)} 
            </div>
            <a href={url} target='blank'><button className='text-lg text-white w-full pl-0 ml-0 btn py-3 bg-blue-700 rounded'>Webseite besuchen</button></a>
            </div>
          </div>

          {/* right section */}
          <div className='bg-white md:w-7/12 rounded p-5'>
            <h1 className='text-gray-500 text-xl pb-4'>Beschreibung:</h1>
          <PortableText
            value={body}
            components={ptComponents}
          />
          </div>
          </div>

        </article>
        <div className='p-4 sm:p-6'>
        </div>
    </div>
  )
}

export default Post

const query = groq`*[_type == "post" && slug.current == $slug][0]{
  title,
  "categories": categories[]->title,
  "currencies": currencies[]->image,
  mainImage,
  body,
  url,
}`

{/* static Paths */}
export async function getStaticPaths() {
  const paths = await client.fetch(
    groq`*[_type == "post" && defined(slug.current)][].slug.current`
  )
  return {
    paths: paths?.map((slug) => ({params: {slug}})),
    fallback: true,
  }
}


{/* static Props */}
export async function getStaticProps(context) {
  // It's important to default the slug so that it doesn't return "undefined"
  const { slug = "" } = context.params
  const post = await client.fetch(query, { slug })
  return {
    props: {
      post
    }
  }
}