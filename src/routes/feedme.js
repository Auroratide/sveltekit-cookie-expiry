import cookie from 'cookie'

export const post = async () => {
    const flavor = cookie.serialize('flavor', 'chocolate chip', {
        expires: new Date(Date.now() + 1000 * 60)
    })
    const headers = new Headers()
    headers.append('Set-Cookie', flavor)

    return new Response(null, {
        headers,
    })
}

export const del = async () => {
    const flavor = cookie.serialize('flavor', 'chocolate chip', {
        expires: new Date() // expire immediately
    })
    const headers = new Headers()
    headers.append('Set-Cookie', flavor)

    return new Response(null, {
        headers,
    })
}