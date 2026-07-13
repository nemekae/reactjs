import { createRoot } from "react-dom/client"

const root = createRoot(document.getElementById("root"))

const Page = () => {
    return (
        <>
            <header>
                 <img src="../src/assets/favicon.svg" width="40px" alt="React Logo" />
            </header>

            <main>
                <h1>Reason I am excited to learn React!</h1>
                <ol>
                    <li>React is a popular library</li>
                    <li>Lets grind the main core.</li>
                </ol>
            </main>
             
            <footer>
                <small> ©️ 2026 nemekae development. All rights reserved!</small>
            </footer>

        </>
    )
}
root.render(
    <Page />
)