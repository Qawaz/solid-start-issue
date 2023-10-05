import {Headline} from "@qinetik/anique";

export default function Home() {
    return (
        <main>
            <Headline>Solid Start Issue</Headline>
            <h1>You must refresh to see the error on error page</h1>
            <p>
                Some things I gathered
            </p>
            <ul>
                <li>Error doesn't occur if ssr = false</li>
                <li>Error occurs with a library that I built using solid-tsup-preset</li>
                <li>Error doesn't occur when I import the source code of the library into my project</li>
                <li>In <code>success2</code> I just reversed the order of components and voila it works</li>
                <li>Error only occurs when the navigatedToPassword() block is on top</li>
                <li>isBrowser = true & tag = div is displayed by our styled, which uses a ErrorBoundary</li>
            </ul>
        </main>
    )
}
