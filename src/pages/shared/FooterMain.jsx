
import { Footer } from 'flowbite-react';
import { BsFacebook, BsGithub, BsInstagram, BsTwitter } from 'react-icons/bs';

const FooterMain = () => {
  return (
    <Footer bgDark >
      <div className="w-full px-4 lg:px-24">
        <div className="grid w-full grid-cols-2 gap-8 px-6 py-8 md:grid-cols-4">
          <div>
            <Footer.Title title="Company" className='text-gray-100' />
            <Footer.LinkGroup col>
              <Footer.Link href="/about" className='text-gray-100'>
                About
              </Footer.Link>
              <Footer.Link href="/careers" className='text-gray-100'>
                Careers
              </Footer.Link>
              <Footer.Link href="/underdevlop" className='text-gray-100'>
                Brand Center
              </Footer.Link>
              <Footer.Link href="/blog" className='text-gray-100'>
                Blog
              </Footer.Link>
            </Footer.LinkGroup>
          </div>
          <div>
            <Footer.Title title="help center" className='text-gray-100' />
            <Footer.LinkGroup col>
              <Footer.Link href="/underdevlop" className='text-gray-100'>
                Discord Server
              </Footer.Link>
              <Footer.Link href="/underdevlop" className='text-gray-100'>
                Twitter
              </Footer.Link>
              <Footer.Link href="/underdevlop" className='text-gray-100'>
                Facebook
              </Footer.Link>
              <Footer.Link href="/underdevlop" className='text-gray-100'>
                Contact Us
              </Footer.Link>
            </Footer.LinkGroup>
          </div>
          <div>
            <Footer.Title title="legal" className='text-gray-100'/>
            <Footer.LinkGroup col>
              <Footer.Link href="/underdevlop" className='text-gray-100'>
                Privacy Policy
              </Footer.Link>
              <Footer.Link href="/underdevlop" className='text-gray-100'>
                Licensing
              </Footer.Link>
              <Footer.Link href="/underdevlop" className='text-gray-100'>
                Terms & Conditions
              </Footer.Link>
            </Footer.LinkGroup>
          </div>
          <div>
            <Footer.Title title="download" className='text-gray-100' />
            <Footer.LinkGroup col>
              <Footer.Link href="/underdevlop" className='text-gray-100'>
                iOS
              </Footer.Link>
              <Footer.Link href="/underdevlop" className='text-gray-100'>
                Android
              </Footer.Link>
              <Footer.Link href="/underdevlop" className='text-gray-100'>
                Windows
              </Footer.Link>
              <Footer.Link href="/underdevlop" className='text-gray-100'>
                MacOS
              </Footer.Link>
            </Footer.LinkGroup>
          </div>
        </div>
        <div className="w-full bg-gray-700 px-4 py-6 sm:flex sm:items-center sm:justify-between">
          <Footer.Copyright
            by="Australia Pacific Publisher"
            href="#"
            year={2023}
            className='text-gray-100'
          />
          <div className="mt-4 flex space-x-6 sm:mt-0 sm:justify-center">
            <Footer.Icon
              href="#"
              icon={BsFacebook}
              className='text-gray-100'
            />
            <Footer.Icon
              href="#"
              icon={BsInstagram}
              className='text-gray-100'
            />
            <Footer.Icon
              href="#"
              icon={BsTwitter}
              className='text-gray-100'
            />
            <Footer.Icon
              href="#"
              icon={BsGithub}
              className='text-gray-100'
            />
          </div>
        </div>
      </div>
    </Footer>
  )
}

export default FooterMain;