import { BackButton } from "../BackButton"
import { Comment } from "../Comment"
import { ROUTES, useRoute } from "../RouteProvider"

export function About() {
    const { setRoute } = useRoute()
    return (
        <div className="flex flex-col max-w-[800px]">
          <BackButton onClick={
            () => setRoute({
              page: ROUTES.INDEX_PAGES,
              params: {}
            })
          } />
          <h1 className="text-3xl lg:text-4xl mt-5">
            How does it work?
          </h1>
          <Comment>
            <Comment.Title>Backend implementation</Comment.Title>
            <Comment.Body>
              <p>Rest API built on Ruby on Rails. Why did I use Ruby on Rails?, well, this project is for having fun, and I didn't use Ruby on Rails since Rails 5, and now it's Rails 7, so I wanted to use this oportunity to catch up on it.</p>
              <p className="underline mt-4 mb-0.5">Engineer implementation:</p>
              <ul>
                <li><strong>Database</strong>: There is a table called Pages that stores the pages, the columns are: owner_address, collection_address, title, description, template.</li>
                <li><strong>API</strong>:
                  <ul>
                    <li><strong>GET /pages</strong>: returns all the pages without including the secret "description".</li>
                    <li><strong>POST /pages</strong>: creates a new page.</li>
                    <li><strong>GET /pages/1</strong>: returns the page with id 1, including the secret "description", only if the user has an item from the page's collection.</li>
                  </ul>
                </li>
              </ul>
              <p className="underline mt-4 mb-0.5">How do I verify that the wallet has an item from the page's collection?</p>
              <p>I use alchemy API method isHolderOfContract to verify the user own an item from the collection. The code can be found on "lib/alchemy_api.rb".</p>
              <p className="underline mt-4 mb-0.5">How do I verify the user actually owns the wallet?</p>
              <p>I just verify they are able to sign a message. If they like to access to "/pages/32", then the user must send as params "user_address" and "signed_message", where "signed_message" is the signature of the message "Sign it to verify you have access to the collection #32". Then, we just need to verify the signature is correct. The code can be found on "lib/ethereum_utils.rb". </p>
              <p className="underline mt-4 mb-0.5">What improvements can be done?</p>
              <p>There are a ton of them!, few of them are:</p>
              <ul>
                <li><strong>Authentication</strong>: Instead of having the user to sign a message on every page, they could just sign a custom message on login, and then we could track the session with a Token-based authentication. We could introduce a Users table.</li>
                <li><strong>PATCH/PUT /pages/1</strong>: Currently anyone can update a page, we should gate it base on wallet/user.</li>
                <li><strong>DELETE /pages/1</strong>: Currently anyone can delete a page, we should gate it base on wallet/user.</li>
                <li><strong>Collections</strong>: They should have their own table, and Pages should have a foreign key like "collection_id: reference" instead of "collection_address: string".</li>
                <li><strong>Rich pages</strong>: Pages are pretty boring right now, there are a ton of elements could be added like rich text, images upload support, custom sections, and more.</li>
              </ul>
            </Comment.Body>
          </Comment>
          <Comment>
            <Comment.Title>Frontend implementation</Comment.Title>
            <Comment.Body>
              React single page application.
              <p>Rest API built on Ruby on Rails. Why did I use Ruby on Rails?, well, this project is for having fun, and I didn't use Ruby on Rails since Rails 5, and now it's Rails 7, so I wanted to use this oportunity to catch up on it.</p>
              <p className="underline mt-4 mb-0.5">Engineer implementation:</p>
              <p>There are three main components:</p>
              <ul>
                <li><strong>IndexPage</strong>: Shows a list of the existing pages, without the secret description.</li>
                <li><strong>CreatePage</strong>: Form to create a page, on success it redirects to IndexPage.</li>
                <li><strong>ShowPage</strong>: Ask for the page, and if the user has access to it, shows it including the secret description.</li>
              </ul>
              <p className="underline mt-4 mb-0.5">What improvements can be done?</p>
              <p>Also there are a ton of them!, few of them are:</p>
              <ul>
              <li><strong>API service</strong>: We are currently just using fetch and no using local storage / cache at all. We should create a service for it, if we were using Graphql we could just be using Relay or Apollo for example.</li>
                <li><strong>Routing</strong>: For simplicity we built RouteProvider, but we aren't using routing at all!, so similar to our api we could have routes like "/pages", "/pages/21", and so and so forth. Then, we can split the code on "components/" and "pages/".</li>
                <li><strong>System design components</strong>: We have a ton of duplicated css that can be abstracted on UI components.</li>
                <li><strong>Add better loading states</strong>: Add some shimmer or so.</li>
                <li><strong>Form validation</strong>: Title and decription should be required. And we should validate collection address.</li>
                <li><strong>WYSIWYG</strong>: Yeah, it could be pretty cool. We have to use an iframe, so we could have a mobile view too.</li>
              </ul>
            </Comment.Body>
          </Comment>
          <div className="lg:ml-auto mt-auto pt-20">
            <span className="opacity-70">Created with</span> ❤️ <span className="opacity-70">by Sam Hernandez</span>
          </div>
        </div>
    )
}