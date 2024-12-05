"use client";

import { useState } from "react";

export default function Cipher() {
    const [secret, setSecret] = useState<string>("");
    const [mnemonic, setMnemonic] = useState<string>("");
    const [encrypted, setEncrypted] = useState<number | null>(null);

    return (
        <div className="m-auto flex flex-col items-center justify-center">
            <div className="w-full max-w-screen-sm m-auto bg-white rounded-lg shadow-md p-4 flex flex-col">
                <header className="w-full">
                    <h1 className="text-2xl font-bold text-center">SeedCipher</h1>
                </header>
                <hr className="mt-4" />
                <div className="flex-1">
                    {/* form */}
                    <Form />
                </div>
            </div>
            <br />
            <div className="text-sm text-center text-[rgba(var(--foreground-rgb),0.56)]">
                <p>This app is client-side only, your data is not stored or shared with any server.</p>
                <p>The source code is available on <a href="https://github.com/raul-silva/seed-cipher" target="_blank" rel="noreferrer">GitHub</a>.</p>
                <p>Made with ❤️ by Raul Rico</p>
            </div>
        </div>
    );
}

function Form() {
    return (
        <form className="w-full flex flex-col justify-center items-center p-4">
            {/* secret */}
            <div className="w-full flex flex-col justify-center items-center p-4">
                <label htmlFor="secret" className="text-sm font-bold">
                    Secret
                </label>
                <input max={96} min={3} type="text" id="secret"
                    className="w-full p-2 text-sm border-2 border-gray-300 rounded-lg" />
            </div>
            {/* mnemonic */}
            <div className="w-full flex flex-col justify-center items-center p-4">
                <label htmlFor="mnemonic" className="text-sm font-bold">
                    Mnemonic
                </label>
                <textarea id="mnemonic" rows={9}
                    className="w-full p-2 text-sm border-2 border-gray-300 rounded-lg" />
            </div>
            {/* submit */}
            <div className="w-full flex justify-center items-center p-4">
                <button type="submit" className="w-full py-2 px-3 text-base bg-[rgb(var(--tint-rgb))] text-white rounded-lg">
                    Encrypt
                </button>
            </div>
        </form>
    )
}