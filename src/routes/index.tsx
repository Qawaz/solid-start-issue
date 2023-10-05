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
                <li>Error only occurs when you refresh or when navigating to the route fresh</li>
                <li>I still have to check Astro, If this issue doesn't happen in Astro, I will count it as a pure solid-start bug because astro does ssr</li>
                <li>In <code>success</code> I just reversed the order of components and voila it works</li>
                <li>isBrowser = true & tag = form is displayed by our styled, which uses a ErrorBoundary</li>
            </ul>
        </main>
    )
}
