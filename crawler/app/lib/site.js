import SitemapGetter from 'sitemap-getter';
import process from 'process';

export default class Site
{
    constructor(address)
    {
        this._address = address;
    }

    async crawl(browser)
    {
        // const stream = await SitemapParser.createStream(`${this._address}/sitemap.xml`);
        // console.dir('rock n roll');
        // stream.on('data', (data) => {
        //     console.dir(data);
        // });

        // const data = await SitemapParser.get(`${this._address}/sitemap.xml`);
        const data = await SitemapGetter.getLocations(`https://foreignsky.ru/sitemap.xml`);
        console.dir(data);

        // const hz = new Sitemapper({
        //     url: `${this._address}/sitemap.xml`,
        //     timeout: 15000, // 15 seconds
        // });
        //
        // const map  = await hz.fetch();
        //
        // console.dir(map);

        // hz.fetch()
        //     .then(data => console.log(data.sites))
        //     .catch(error => console.log(error));


        // first, get sitemap
        // const map = await new Promise((resolve, reject) => {
        //     sitemaps.parseSitemaps(`${this._address}/sitemap.xml`, console.log, (err, map) => {
        //         if (err)
        //         {
        //             reject(err);
        //         }
        //         else
        //         {
        //             console.dir(map);
        //             resolve(map);
        //         }
        //     });
        // });

        // console.dir(map);

        return 1;
    }
}
