import axios from 'axios'

export default async function getCurrentlyScrobbling(req, res) {
    if (!process.env.LAST_FM_API_KEY) {
        console.log('No LASTFM_API_KEY supplied!')

        return res.status(500).json({
            ok: false,
            error: new Error('No API key provided.'),
        })
    }

    const lastFmResponse = await axios.get(
        `https://ws.audioscrobbler.com/2.0/?method=user.getrecenttracks&user=mr_spicysauce&api_key=${process.env.LAST_FM_API_KEY}&format=json&limit=1`
    )

    const data = lastFmResponse.data['recenttracks']['track']

    const currentTrack =
        data.find((track) => {
            return !!track['@attr']?.nowplaying
        }) || {}

    return res.json({
        songTitle: currentTrack?.name,
        songArtist: currentTrack?.artist?.['#text'],
    })
}
