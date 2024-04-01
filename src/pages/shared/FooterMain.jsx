
import { Footer } from 'flowbite-react';
import { BsFacebook, BsGithub, BsInstagram, BsTwitter } from 'react-icons/bs';

const FooterMain = () => {
  return (
    <Footer bgDark>
      <div className="w-full px-4 lg:px-24">
        <div className="grid w-full grid-cols-2 gap-8 px-6 py-8 md:grid-cols-4">
          <div>
            <Footer.Title title="Company" />
            <Footer.LinkGroup col>
              <Footer.Link href="/about">
                About
              </Footer.Link>
              <Footer.Link href="/underdevlop">
                Careers
              </Footer.Link>
              <Footer.Link href="/underdevlop">
                Brand Center
              </Footer.Link>
              <Footer.Link href="/blog">
                Blog
              </Footer.Link>
            </Footer.LinkGroup>
          </div>
          <div>
            <Footer.Title title="help center" />
            <Footer.LinkGroup col>
              <Footer.Link href="/underdevlop">
                Discord Server
              </Footer.Link>
              <Footer.Link href="/underdevlop">
                Twitter
              </Footer.Link>
              <Footer.Link href="/underdevlop">
                Facebook
              </Footer.Link>
              <Footer.Link href="/underdevlop">
                Contact Us
              </Footer.Link>
            </Footer.LinkGroup>
          </div>
          <div>
            <Footer.Title title="legal" />
            <Footer.LinkGroup col>
              <Footer.Link href="/underdevlop">
                Privacy Policy
              </Footer.Link>
              <Footer.Link href="/underdevlop">
                Licensing
              </Footer.Link>
              <Footer.Link href="/underdevlop">
                Terms & Conditions
              </Footer.Link>
            </Footer.LinkGroup>
          </div>
          <div>
            <Footer.Title title="download" />
            <Footer.LinkGroup col>
              <Footer.Link href="/underdevlop">
                iOS
              </Footer.Link>
              <Footer.Link href="/underdevlop">
                Android
              </Footer.Link>
              <Footer.Link href="/underdevlop">
                Windows
              </Footer.Link>
              <Footer.Link href="/underdevlop">
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
          />
          <div className="mt-4 flex space-x-6 sm:mt-0 sm:justify-center">
            <Footer.Icon
              href="#"
              icon={BsFacebook}
            />
            <Footer.Icon
              href="#"
              icon={BsInstagram}
            />
            <Footer.Icon
              href="#"
              icon={BsTwitter}
            />
            <Footer.Icon
              href="#"
              icon={BsGithub}
            />
          </div>
        </div>
      </div>
    </Footer>
  )
}

export default FooterMain;