import { About } from "../About/About"
import { IndexPage } from "../IndexPage"
import { CreatePage } from "../CreatePage"
import { ShowPage } from "../ShowPage"
import { ROUTES, useRoute } from "../RouteProvider"

export function Content() {
    const { route } = useRoute()
    switch(route.page) {
        case(ROUTES.ABOUT):
            return <About />
        case(ROUTES.INDEX_PAGES):
            return <IndexPage />
        case(ROUTES.CREATE_PAGE):
            return <CreatePage />
        case(ROUTES.SHOW_PAGE):
            return <ShowPage />
        default:
            return <IndexPage />
    }
}