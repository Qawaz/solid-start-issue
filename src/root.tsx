// @refresh reload
import {Suspense} from 'solid-js'
import {useLocation, A, Body, ErrorBoundary, FileRoutes, Head, Html, Meta, Routes, Scripts, Title} from 'solid-start'
import './root.css'
import {AniqueGlobalStyling, AniqueThemeDark, AniqueThemeLight, DrawerItem, Row, StaticDrawer} from "@qinetik/anique";
import {styled} from "@qinetik/emotion";

const Anchor = styled(A)`
  text-decoration:none;
`

export default function Root() {
    const location = useLocation()
    const active = (path: string) =>
        path == location.pathname ? 'border-sky-600' : 'border-transparent hover:border-sky-600'

    return (
        <Html lang="en" class={"dark"}>
            <Head>
                <Title>SolidStart - With Anique</Title>
                <Meta charset="utf-8"/>
                <Meta name="viewport" content="width=device-width, initial-scale=1"/>
                <AniqueThemeLight containerCssSelector={".light"}/>
                <AniqueThemeDark containerCssSelector={".dark"}/>
                <AniqueGlobalStyling/>
                <style>{`
                    :root.dark {
                        color-scheme : dark;
                    }
                    :root.light {
                        color-scheme : light;
                    }
               `}</style>
            </Head>
            <Body>
                <Suspense>
                    <ErrorBoundary>
                        <Row>
                            <nav>
                                <StaticDrawer>
                                    <Anchor href="/">
                                        <DrawerItem isSelected={active('/')}>
                                            Home
                                        </DrawerItem>
                                    </Anchor>
                                    <Anchor href="/success">
                                        <DrawerItem isSelected={active('/')}>
                                            Success
                                        </DrawerItem>
                                    </Anchor>
                                    <Anchor href="/error">
                                        <DrawerItem isSelected={active('/')}>
                                            Error
                                        </DrawerItem>
                                    </Anchor>
                                </StaticDrawer>
                            </nav>
                            <Routes>
                                <FileRoutes/>
                            </Routes>
                        </Row>
                    </ErrorBoundary>
                </Suspense>
                <Scripts/>
            </Body>
        </Html>
    )
}
