<script>
    const setCookie = () => fetch('/feedme', {
        method: 'POST',
    })

    const unsetCookie = () => fetch('/feedme', {
        method: 'DELETE',
    })
</script>

<h1>Cookie Expiry SvelteKit Issue</h1>
<button on:click={setCookie}>Set the <code>flavor</code> cookie</button>
<button on:click={unsetCookie}>Remove the cookie</button>
<p>Then look at your cookies and see what happened.</p>
<p>In local environment, it should work as expected. Deployed to Netlify, and the cookies get split.</p>
