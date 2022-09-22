import React from 'react';
import groq from 'groq';
import sanityClient from "../../client.js";
import  Link  from 'next/link';
import Search from './Search';

const Companies = ({posts}) => {
  return (
    <div>
        <div className='pb-10'>
        <Search />
      </div>
      <div className='pb-28'>
      {posts.length  >0 && posts.map (
          ({ id, title, description, slug }) =>
            slug && (
              <div key={id} className='block pt-4 lg:px-40 w-full'>
                <Link href="/post/[slug]" as={`/post/${slug.current}`}>
                  <h2 className='text-blue-700 hover:text-blue-800 text-xl cursor-pointer'>{title}</h2>
                </Link>
                <p className='pb-4'>{description}</p>
                <hr></hr>
              </div>
            )
        )}
        </div>
    </div>
  )
}

export async function getStaticProps() {
    const posts = await sanityClient.fetch(groq `
    *[_type == "post"]
    `)
    return {
      props: {
        posts
      }
    }
  }

export default Companies