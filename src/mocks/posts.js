/* eslint-disable */
export const posts = [{
    'id': 146,
    'date': '2018-10-23T23:35:17',
    'date_gmt': '2018-10-23T20:35:17',
    'guid': { 'rendered': 'http:\/\/blog.vladsamoylov.com\/?p=146' },
    'modified': '2018-11-04T01:38:36',
    'modified_gmt': '2018-11-03T22:38:36',
    'slug': 'public-ipfs-gateway-by-cloudflare',
    'status': 'publish',
    'type': 'post',
    'link': 'http:\/\/vladsamoylov.com\/2018\/10\/23\/public-ipfs-gateway-by-cloudflare\/',
    'title': { 'rendered': 'Public IPFS gateway by CloudFlare' },
    'content': {
        'rendered': '\n<p>At first you might feel like &#8220;meh, another try to invent P2P-network&#8221;, but I think it&#8217;s not the case with CloudFlare. I&#8217;m pretty sure it won&#8217;t be easy for governments (for most of them for now, at least) to ban it as there is like more than half of the Internet served by CF. Moreover, it&#8217;s simple to get started with as it doesn&#8217;t require any external soft \u2014 just an ordinary browser. <\/p>\n\n\n<p>These people are awesome.<\/p>\n\n\n<p><a href="https:\/\/developers.cloudflare.com\/distributed-web\/">Get started. <\/a><\/p>\n<p><a href="https:\/\/blog.cloudflare.com\/distributed-web-gateway\/">Blog post. <\/a><\/p>\n',
        'protected': false
    },
    'excerpt': {
        'rendered': '<p>At first you might feel like &#8220;meh, another try to invent P2P-network&#8221;, but I think it&#8217;s not the case with CloudFlare. I&#8217;m pretty sure it won&#8217;t be easy for governments (for most of them for now, at least) to ban it as there is like more than half of the Internet served by CF. Moreover, &hellip; <\/p>\n<p class="link-more"><a href="http:\/\/vladsamoylov.com\/2018\/10\/23\/public-ipfs-gateway-by-cloudflare\/" class="more-link">Continue reading<span class="screen-reader-text"> &#8220;Public IPFS gateway by CloudFlare&#8221;<\/span><\/a><\/p>\n',
        'protected': false
    },
    'author': 1,
    'featured_media': 0,
    'comment_status': 'open',
    'ping_status': 'open',
    'sticky': false,
    'template': '',
    'format': 'standard',
    'meta': { 'spay_email': '' },
    'categories': [1],
    'tags': [8],
    'jetpack_featured_media_url': '',
    'jetpack_shortlink': 'https:\/\/wp.me\/pad7ZF-2m',
    '_links': {
        'self': [{ 'href': 'http:\/\/vladsamoylov.com\/wp-json\/wp\/v2\/posts\/146' }],
        'collection': [{ 'href': 'http:\/\/vladsamoylov.com\/wp-json\/wp\/v2\/posts' }],
        'about': [{ 'href': 'http:\/\/vladsamoylov.com\/wp-json\/wp\/v2\/types\/post' }],
        'author': [{ 'embeddable': true, 'href': 'http:\/\/vladsamoylov.com\/wp-json\/wp\/v2\/users\/1' }],
        'replies': [{ 'embeddable': true, 'href': 'http:\/\/vladsamoylov.com\/wp-json\/wp\/v2\/comments?post=146' }],
        'version-history': [{
            'count': 2,
            'href': 'http:\/\/vladsamoylov.com\/wp-json\/wp\/v2\/posts\/146\/revisions'
        }],
        'predecessor-version': [{
            'id': 164,
            'href': 'http:\/\/vladsamoylov.com\/wp-json\/wp\/v2\/posts\/146\/revisions\/164'
        }],
        'wp:attachment': [{ 'href': 'http:\/\/vladsamoylov.com\/wp-json\/wp\/v2\/media?parent=146' }],
        'wp:term': [{
            'taxonomy': 'category',
            'embeddable': true,
            'href': 'http:\/\/vladsamoylov.com\/wp-json\/wp\/v2\/categories?post=146'
        }, {
            'taxonomy': 'post_tag',
            'embeddable': true,
            'href': 'http:\/\/vladsamoylov.com\/wp-json\/wp\/v2\/tags?post=146'
        }],
        'curies': [{ 'name': 'wp', 'href': 'https:\/\/api.w.org\/{rel}', 'templated': true }]
    }
}, {
    'id': 107,
    'date': '2018-09-18T15:30:26',
    'date_gmt': '2018-09-18T12:30:26',
    'guid': { 'rendered': 'http:\/\/blog.vladsamoylov.com\/?p=107' },
    'modified': '2019-04-10T21:15:31',
    'modified_gmt': '2019-04-10T18:15:31',
    'slug': 'in-a-nutshell-what-happens-when-you-click-a-link-in-a-browser',
    'status': 'publish',
    'type': 'post',
    'link': 'http:\/\/vladsamoylov.com\/2018\/09\/18\/in-a-nutshell-what-happens-when-you-click-a-link-in-a-browser\/',
    'title': { 'rendered': 'In a nutshell: what happens when you click a link in a browser' },
    'content': {
        'rendered': '\n<ol><li>First we gotta figure out, what IP represents a domain name. In order to do that an operating system:<ul><li>looks into hosts file to find a hardcoded IP-address;<\/li><li>looks into&nbsp;<abbr title="domain name system">DNS<\/abbr> cache to find cached results of a previously done query;<\/li><li>if none found, it produces a DNS lookup and ask a special server for an IP of given domain address.<\/li><\/ul><\/li><li>When OS gets an IP, it has to establish a connection with a server on that IP. It is done via <abbr title="Transmission Control Protocol">TCP<\/abbr> protocol. The connection is <a href="http:\/\/www.thenetworkencyclopedia.com\/entry\/tcp-three-way-handshake\/">a three way handshake<\/a>. If you interested in why not two-way, <a href="https:\/\/networkengineering.stackexchange.com\/questions\/24068\/why-do-we-need-a-3-way-handshake-why-not-just-2-way">there is an explanation<\/a>.&nbsp;<\/li><li>Client sends an HTTP request via this established connection. The server somehow handles it and sends some data which results in a page.<\/li><li>Browser handles what it just got. If there are assets that are external relative to our server, browser handles them in the same way: DNS-resolution, TCP-connection, HTTP-request.<\/li><\/ol>\n\n\n<p><iframe width="560" height="315" src="https:\/\/www.youtube-nocookie.com\/embed\/keo0dglCj7I" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen><\/iframe><\/p>\n\n\n\n<p><\/p>\n',
        'protected': false
    },
    'excerpt': {
        'rendered': '<p>First we gotta figure out, what IP represents a domain name. In order to do that an operating system: looks into hosts file to find a hardcoded IP-address; looks into&nbsp;DNS cache to find cached results of a previously done query; if none found, it produces a DNS lookup and ask a special server for an &hellip; <\/p>\n<p class="link-more"><a href="http:\/\/vladsamoylov.com\/2018\/09\/18\/in-a-nutshell-what-happens-when-you-click-a-link-in-a-browser\/" class="more-link">Continue reading<span class="screen-reader-text"> &#8220;In a nutshell: what happens when you click a link in a browser&#8221;<\/span><\/a><\/p>\n',
        'protected': false
    },
    'author': 1,
    'featured_media': 0,
    'comment_status': 'open',
    'ping_status': 'open',
    'sticky': false,
    'template': '',
    'format': 'standard',
    'meta': { 'spay_email': '' },
    'categories': [1],
    'tags': [7, 8],
    'jetpack_featured_media_url': '',
    'jetpack_shortlink': 'https:\/\/wp.me\/pad7ZF-1J',
    '_links': {
        'self': [{ 'href': 'http:\/\/vladsamoylov.com\/wp-json\/wp\/v2\/posts\/107' }],
        'collection': [{ 'href': 'http:\/\/vladsamoylov.com\/wp-json\/wp\/v2\/posts' }],
        'about': [{ 'href': 'http:\/\/vladsamoylov.com\/wp-json\/wp\/v2\/types\/post' }],
        'author': [{ 'embeddable': true, 'href': 'http:\/\/vladsamoylov.com\/wp-json\/wp\/v2\/users\/1' }],
        'replies': [{ 'embeddable': true, 'href': 'http:\/\/vladsamoylov.com\/wp-json\/wp\/v2\/comments?post=107' }],
        'version-history': [{
            'count': 4,
            'href': 'http:\/\/vladsamoylov.com\/wp-json\/wp\/v2\/posts\/107\/revisions'
        }],
        'predecessor-version': [{
            'id': 202,
            'href': 'http:\/\/vladsamoylov.com\/wp-json\/wp\/v2\/posts\/107\/revisions\/202'
        }],
        'wp:attachment': [{ 'href': 'http:\/\/vladsamoylov.com\/wp-json\/wp\/v2\/media?parent=107' }],
        'wp:term': [{
            'taxonomy': 'category',
            'embeddable': true,
            'href': 'http:\/\/vladsamoylov.com\/wp-json\/wp\/v2\/categories?post=107'
        }, {
            'taxonomy': 'post_tag',
            'embeddable': true,
            'href': 'http:\/\/vladsamoylov.com\/wp-json\/wp\/v2\/tags?post=107'
        }],
        'curies': [{ 'name': 'wp', 'href': 'https:\/\/api.w.org\/{rel}', 'templated': true }]
    }
}, {
    'id': 50,
    'date': '2018-08-26T18:57:28',
    'date_gmt': '2018-08-26T15:57:28',
    'guid': { 'rendered': 'http:\/\/blog.vladsamoylov.com\/?p=50' },
    'modified': '2019-04-10T21:18:36',
    'modified_gmt': '2019-04-10T18:18:36',
    'slug': 'the-best-introductory-explanation-of-ml-ever',
    'status': 'publish',
    'type': 'post',
    'link': 'http:\/\/vladsamoylov.com\/2018\/08\/26\/the-best-introductory-explanation-of-ml-ever\/',
    'title': { 'rendered': 'The best introductory explanation of ML ever' },
    'content': {
        'rendered': '<p><iframe width="560" height="315" src="https:\/\/www.youtube-nocookie.com\/embed\/SV-cgdobtTA" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen><\/iframe><\/p>\n\n\n\n<p><\/p>\n',
        'protected': false
    },
    'excerpt': { 'rendered': '', 'protected': false },
    'author': 1,
    'featured_media': 0,
    'comment_status': 'open',
    'ping_status': 'open',
    'sticky': false,
    'template': '',
    'format': 'standard',
    'meta': { 'spay_email': '' },
    'categories': [1],
    'tags': [5, 6],
    'jetpack_featured_media_url': '',
    'jetpack_shortlink': 'https:\/\/wp.me\/pad7ZF-O',
    '_links': {
        'self': [{ 'href': 'http:\/\/vladsamoylov.com\/wp-json\/wp\/v2\/posts\/50' }],
        'collection': [{ 'href': 'http:\/\/vladsamoylov.com\/wp-json\/wp\/v2\/posts' }],
        'about': [{ 'href': 'http:\/\/vladsamoylov.com\/wp-json\/wp\/v2\/types\/post' }],
        'author': [{ 'embeddable': true, 'href': 'http:\/\/vladsamoylov.com\/wp-json\/wp\/v2\/users\/1' }],
        'replies': [{ 'embeddable': true, 'href': 'http:\/\/vladsamoylov.com\/wp-json\/wp\/v2\/comments?post=50' }],
        'version-history': [{ 'count': 2, 'href': 'http:\/\/vladsamoylov.com\/wp-json\/wp\/v2\/posts\/50\/revisions' }],
        'predecessor-version': [{
            'id': 204,
            'href': 'http:\/\/vladsamoylov.com\/wp-json\/wp\/v2\/posts\/50\/revisions\/204'
        }],
        'wp:attachment': [{ 'href': 'http:\/\/vladsamoylov.com\/wp-json\/wp\/v2\/media?parent=50' }],
        'wp:term': [{
            'taxonomy': 'category',
            'embeddable': true,
            'href': 'http:\/\/vladsamoylov.com\/wp-json\/wp\/v2\/categories?post=50'
        }, {
            'taxonomy': 'post_tag',
            'embeddable': true,
            'href': 'http:\/\/vladsamoylov.com\/wp-json\/wp\/v2\/tags?post=50'
        }],
        'curies': [{ 'name': 'wp', 'href': 'https:\/\/api.w.org\/{rel}', 'templated': true }]
    }
}, {
    'id': 59,
    'date': '2018-07-11T20:40:58',
    'date_gmt': '2018-07-11T17:40:58',
    'guid': { 'rendered': 'http:\/\/blog.vladsamoylov.com\/2018\/07\/11\/the-most-useful-video-about-javascripts-event-loop\/' },
    'modified': '2019-04-10T21:20:48',
    'modified_gmt': '2019-04-10T18:20:48',
    'slug': 'the-most-useful-video-about-javascripts-event-loop',
    'status': 'publish',
    'type': 'post',
    'link': 'http:\/\/vladsamoylov.com\/2018\/07\/11\/the-most-useful-video-about-javascripts-event-loop\/',
    'title': { 'rendered': 'The\u00a0most useful video about javascript\u2019s event loop' },
    'content': {
        'rendered': '\n<p>Amazingly great talk.<\/p>\n\n\n<p><iframe width="560" height="315" src="https:\/\/www.youtube-nocookie.com\/embed\/cCOL7MC4Pl0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen><\/iframe><\/p>\n',
        'protected': false
    },
    'excerpt': { 'rendered': '<p>Amazingly great talk.<\/p>\n', 'protected': false },
    'author': 1,
    'featured_media': 0,
    'comment_status': 'open',
    'ping_status': 'open',
    'sticky': false,
    'template': '',
    'format': 'standard',
    'meta': { 'spay_email': '' },
    'categories': [1],
    'tags': [5, 6],
    'jetpack_featured_media_url': '',
    'jetpack_shortlink': 'https:\/\/wp.me\/pad7ZF-X',
    '_links': {
        'self': [{ 'href': 'http:\/\/vladsamoylov.com\/wp-json\/wp\/v2\/posts\/59' }],
        'collection': [{ 'href': 'http:\/\/vladsamoylov.com\/wp-json\/wp\/v2\/posts' }],
        'about': [{ 'href': 'http:\/\/vladsamoylov.com\/wp-json\/wp\/v2\/types\/post' }],
        'author': [{ 'embeddable': true, 'href': 'http:\/\/vladsamoylov.com\/wp-json\/wp\/v2\/users\/1' }],
        'replies': [{ 'embeddable': true, 'href': 'http:\/\/vladsamoylov.com\/wp-json\/wp\/v2\/comments?post=59' }],
        'version-history': [{ 'count': 4, 'href': 'http:\/\/vladsamoylov.com\/wp-json\/wp\/v2\/posts\/59\/revisions' }],
        'predecessor-version': [{
            'id': 205,
            'href': 'http:\/\/vladsamoylov.com\/wp-json\/wp\/v2\/posts\/59\/revisions\/205'
        }],
        'wp:attachment': [{ 'href': 'http:\/\/vladsamoylov.com\/wp-json\/wp\/v2\/media?parent=59' }],
        'wp:term': [{
            'taxonomy': 'category',
            'embeddable': true,
            'href': 'http:\/\/vladsamoylov.com\/wp-json\/wp\/v2\/categories?post=59'
        }, {
            'taxonomy': 'post_tag',
            'embeddable': true,
            'href': 'http:\/\/vladsamoylov.com\/wp-json\/wp\/v2\/tags?post=59'
        }],
        'curies': [{ 'name': 'wp', 'href': 'https:\/\/api.w.org\/{rel}', 'templated': true }]
    }
}, {
    'id': 60,
    'date': '2018-05-23T00:15:55',
    'date_gmt': '2018-05-22T21:15:55',
    'guid': { 'rendered': 'http:\/\/blog.vladsamoylov.com\/2018\/05\/23\/a-great-tool-to-visualise-a-code-block\/' },
    'modified': '2018-10-25T17:33:42',
    'modified_gmt': '2018-10-25T14:33:42',
    'slug': 'a-great-tool-to-visualise-a-code-block',
    'status': 'publish',
    'type': 'post',
    'link': 'http:\/\/vladsamoylov.com\/2018\/05\/23\/a-great-tool-to-visualise-a-code-block\/',
    'title': { 'rendered': 'A\u00a0great tool to\u00a0visualise a\u00a0code block' },
    'content': {
        'rendered': '\n<p><a href="https:\/\/carbon.now.sh\/">There it is<\/a>.<\/p>\n\n\n\n<figure class="wp-block-image"><img src="https:\/\/vladsamoylov.com\/wp-content\/uploads\/carbon-1-768x453.png" alt="" class="wp-image-151" srcset="http:\/\/vladsamoylov.com\/wp-content\/uploads\/carbon-1-768x453.png 768w, http:\/\/vladsamoylov.com\/wp-content\/uploads\/carbon-1-300x177.png 300w, http:\/\/vladsamoylov.com\/wp-content\/uploads\/carbon-1.png 1008w" sizes="(max-width: 768px) 100vw, 768px" \/><\/figure>\n\n\n\n<p>No&nbsp;more screenshots of&nbsp;a&nbsp;text editor.<\/p>\n',
        'protected': false
    },
    'excerpt': {
        'rendered': '<p>There it is. No&nbsp;more screenshots of&nbsp;a&nbsp;text editor.<\/p>\n',
        'protected': false
    },
    'author': 1,
    'featured_media': 0,
    'comment_status': 'open',
    'ping_status': 'open',
    'sticky': false,
    'template': '',
    'format': 'standard',
    'meta': { 'spay_email': '' },
    'categories': [1],
    'tags': [14],
    'jetpack_featured_media_url': '',
    'jetpack_shortlink': 'https:\/\/wp.me\/pad7ZF-Y',
    '_links': {
        'self': [{ 'href': 'http:\/\/vladsamoylov.com\/wp-json\/wp\/v2\/posts\/60' }],
        'collection': [{ 'href': 'http:\/\/vladsamoylov.com\/wp-json\/wp\/v2\/posts' }],
        'about': [{ 'href': 'http:\/\/vladsamoylov.com\/wp-json\/wp\/v2\/types\/post' }],
        'author': [{ 'embeddable': true, 'href': 'http:\/\/vladsamoylov.com\/wp-json\/wp\/v2\/users\/1' }],
        'replies': [{ 'embeddable': true, 'href': 'http:\/\/vladsamoylov.com\/wp-json\/wp\/v2\/comments?post=60' }],
        'version-history': [{ 'count': 5, 'href': 'http:\/\/vladsamoylov.com\/wp-json\/wp\/v2\/posts\/60\/revisions' }],
        'predecessor-version': [{
            'id': 155,
            'href': 'http:\/\/vladsamoylov.com\/wp-json\/wp\/v2\/posts\/60\/revisions\/155'
        }],
        'wp:attachment': [{ 'href': 'http:\/\/vladsamoylov.com\/wp-json\/wp\/v2\/media?parent=60' }],
        'wp:term': [{
            'taxonomy': 'category',
            'embeddable': true,
            'href': 'http:\/\/vladsamoylov.com\/wp-json\/wp\/v2\/categories?post=60'
        }, {
            'taxonomy': 'post_tag',
            'embeddable': true,
            'href': 'http:\/\/vladsamoylov.com\/wp-json\/wp\/v2\/tags?post=60'
        }],
        'curies': [{ 'name': 'wp', 'href': 'https:\/\/api.w.org\/{rel}', 'templated': true }]
    }
}, {
    'id': 62,
    'date': '2018-05-20T19:36:18',
    'date_gmt': '2018-05-20T16:36:18',
    'guid': { 'rendered': 'http:\/\/blog.vladsamoylov.com\/2018\/05\/20\/how-i-think-wikipedia-should-look-like\/' },
    'modified': '2018-10-29T16:55:34',
    'modified_gmt': '2018-10-29T13:55:34',
    'slug': 'how-i-think-wikipedia-should-look-like',
    'status': 'publish',
    'type': 'post',
    'link': 'http:\/\/vladsamoylov.com\/2018\/05\/20\/how-i-think-wikipedia-should-look-like\/',
    'title': { 'rendered': 'How I think Wikipedia should look like' },
    'content': {
        'rendered': '\n<p><strong>edit: I&#8217;ve made <a href="https:\/\/userstyles.org\/styles\/155613\/clear-wiki">a&nbsp;plugin for&nbsp;Stylish chrome extension<\/a>.<\/strong><\/p>\n\n\n\n<p>I love Wikipedia, it\u2019s great. It brings knowledge, enlightenment and&#8230; vision loss. I guess.\n<\/p>\n\n\n\n<figure class="wp-block-image"><img src="http:\/\/vladsamoylov.com\/wp-content\/uploads\/2018\/05\/Screen-Shot-2018-05-20-at-18.57.29.jpg" alt="" class="wp-image-63" srcset="http:\/\/vladsamoylov.com\/wp-content\/uploads\/2018\/05\/Screen-Shot-2018-05-20-at-18.57.29.jpg 2560w, http:\/\/vladsamoylov.com\/wp-content\/uploads\/2018\/05\/Screen-Shot-2018-05-20-at-18.57.29-300x188.jpg 300w, http:\/\/vladsamoylov.com\/wp-content\/uploads\/2018\/05\/Screen-Shot-2018-05-20-at-18.57.29-768x480.jpg 768w, http:\/\/vladsamoylov.com\/wp-content\/uploads\/2018\/05\/Screen-Shot-2018-05-20-at-18.57.29-1024x640.jpg 1024w, http:\/\/vladsamoylov.com\/wp-content\/uploads\/2018\/05\/Screen-Shot-2018-05-20-at-18.57.29-1440x900.jpg 1440w" sizes="(max-width: 2560px) 100vw, 2560px" \/><\/figure>\n\n\n\n<p>I am very happy mobile version chose right direction and&nbsp;being improved. But&nbsp;desktop version is horrible.<br>\nSo I decided to&nbsp;quickly make a&nbsp;2018 version of&nbsp;desktop Wikipedia. <a href="https:\/\/userstyles.org\/styles\/155613\/clear-wiki">Check it out<\/a>!<\/p>\n\n\n\n<h2>Here is what I did<\/h2>\n\n\n\n<p>First of\u00a0all, the\u00a0width is now limited to\u00a0<em>70ch<\/em> and\u00a0font size is drastically increased from 0.875 to\u00a01.6<em>em<\/em>. Line height is now 1.8. \u201cBlack\u201d is now <em>#333<\/em>.<\/p>\n\n\n\n<p>Already much better, I think. But&nbsp;not&nbsp;enough.<\/p>\n\n\n\n<p>You may say I\u2019m a&nbsp;dreamer, but&nbsp;I think that borders must be abolished. So\n<\/p>\n\n\n\n<pre class="wp-block-code language-css"><code>* {\n    border: none !important;\n  }<\/code><\/pre>\n\n\n\n<p>Let\u2019s go even further. From my point of&nbsp;view, the&nbsp;big problem with Wikipedia is that it is visually overloaded. And&nbsp;not&nbsp;only with borders, but&nbsp;with links also. Let\u2019s solve this problem:\n<\/p>\n\n\n\n<pre class="wp-block-code language-css"><code>a, a:hover, a:active, a:focus {\n    text-decoration: none;\n    text-decoration-skip: ink;\n    border-bottom: 1px solid #333333;\n  }<\/code><\/pre>\n\n\n\n<p>Mind the&nbsp;<em>text-decoration-skip: ink;<\/em> rule. This is how things are just gotta be.<\/p>\n\n\n\n<p>Also what annoyes me is references in&nbsp;the&nbsp;text which attract too much attention to&nbsp;themselves. I can\u2019t really understand why they put everything in&nbsp;square brackets, but&nbsp;I think I may remove them with a&nbsp;CSS-hack:\n<\/p>\n\n\n\n<pre class="wp-block-code language-css"><code>.mw-body-content sup a::before {\n    content: \'[\';\n    position: absolute;\n    color: white;\n    left: 0;\n  }\n\n  .mw-body-content sup a::after {\n    content: \']\';\n    position: absolute;\n    color: white;\n    right: 0;\n  }<\/code><\/pre>\n\n\n\n<p>Also I find a&nbsp;bunch of&nbsp;stuff on&nbsp;Wikipedia just straight up irrelevant. Boldly get rid of&nbsp;it and&nbsp;never look back.\n<\/p>\n\n\n\n<pre class="wp-block-code language-css"><code>.mw-editsection, #p-views, #mw-head, #siteSub, .toctitle .toctoggle, .mw-content-ltr .tocnumber, .mbox-image, .mbox-textsmall-div, .after-portlet-lang {\n    display: none !important;\n  }<\/code><\/pre>\n\n\n\n<p>Left panel with a&nbsp;million links may just be zoomed.\n<\/p>\n\n\n\n<pre class="wp-block-code language-css"><code>#mw-panel {\n    zoom: 1.4 !important;\n  }<\/code><\/pre>\n\n\n\n<h2>Result<\/h2>\n\n\n\n<figure class="wp-block-image"><img src="https:\/\/vladsamoylov.com\/wp-content\/uploads\/art.jpg" alt="" class="wp-image-161" srcset="http:\/\/vladsamoylov.com\/wp-content\/uploads\/art.jpg 2072w, http:\/\/vladsamoylov.com\/wp-content\/uploads\/art-300x249.jpg 300w, http:\/\/vladsamoylov.com\/wp-content\/uploads\/art-768x637.jpg 768w, http:\/\/vladsamoylov.com\/wp-content\/uploads\/art-1024x849.jpg 1024w, http:\/\/vladsamoylov.com\/wp-content\/uploads\/art-1440x1194.jpg 1440w" sizes="(max-width: 2072px) 100vw, 2072px" \/><\/figure>\n\n\n\n<p><a href="https:\/\/userstyles.org\/styles\/155613\/clear-wiki">This styling<\/a> has its problems, of&nbsp;course. But&nbsp;now Wikipedia looks like a&nbsp;site that is made to&nbsp;be read with a&nbsp;user in&nbsp;mind.<\/p>\n',
        'protected': false
    },
    'excerpt': {
        'rendered': '<p>edit: I&#8217;ve made a&nbsp;plugin for&nbsp;Stylish chrome extension. I love Wikipedia, it\u2019s great. It brings knowledge, enlightenment and&#8230; vision loss. I guess. I am very happy mobile version chose right direction and&nbsp;being improved. But&nbsp;desktop version is horrible. So I decided to&nbsp;quickly make a&nbsp;2018 version of&nbsp;desktop Wikipedia. Check it out! Here is what I did First of\u00a0all, &hellip; <\/p>\n<p class="link-more"><a href="http:\/\/vladsamoylov.com\/2018\/05\/20\/how-i-think-wikipedia-should-look-like\/" class="more-link">Continue reading<span class="screen-reader-text"> &#8220;How I think Wikipedia should look like&#8221;<\/span><\/a><\/p>\n',
        'protected': false
    },
    'author': 1,
    'featured_media': 0,
    'comment_status': 'open',
    'ping_status': 'open',
    'sticky': false,
    'template': '',
    'format': 'standard',
    'meta': { 'spay_email': '' },
    'categories': [1],
    'tags': [13, 5],
    'jetpack_featured_media_url': '',
    'jetpack_shortlink': 'https:\/\/wp.me\/pad7ZF-10',
    '_links': {
        'self': [{ 'href': 'http:\/\/vladsamoylov.com\/wp-json\/wp\/v2\/posts\/62' }],
        'collection': [{ 'href': 'http:\/\/vladsamoylov.com\/wp-json\/wp\/v2\/posts' }],
        'about': [{ 'href': 'http:\/\/vladsamoylov.com\/wp-json\/wp\/v2\/types\/post' }],
        'author': [{ 'embeddable': true, 'href': 'http:\/\/vladsamoylov.com\/wp-json\/wp\/v2\/users\/1' }],
        'replies': [{ 'embeddable': true, 'href': 'http:\/\/vladsamoylov.com\/wp-json\/wp\/v2\/comments?post=62' }],
        'version-history': [{
            'count': 10,
            'href': 'http:\/\/vladsamoylov.com\/wp-json\/wp\/v2\/posts\/62\/revisions'
        }],
        'predecessor-version': [{
            'id': 162,
            'href': 'http:\/\/vladsamoylov.com\/wp-json\/wp\/v2\/posts\/62\/revisions\/162'
        }],
        'wp:attachment': [{ 'href': 'http:\/\/vladsamoylov.com\/wp-json\/wp\/v2\/media?parent=62' }],
        'wp:term': [{
            'taxonomy': 'category',
            'embeddable': true,
            'href': 'http:\/\/vladsamoylov.com\/wp-json\/wp\/v2\/categories?post=62'
        }, {
            'taxonomy': 'post_tag',
            'embeddable': true,
            'href': 'http:\/\/vladsamoylov.com\/wp-json\/wp\/v2\/tags?post=62'
        }],
        'curies': [{ 'name': 'wp', 'href': 'https:\/\/api.w.org\/{rel}', 'templated': true }]
    }
}, {
    'id': 64,
    'date': '2018-05-20T18:37:18',
    'date_gmt': '2018-05-20T15:37:18',
    'guid': { 'rendered': 'http:\/\/blog.vladsamoylov.com\/2018\/05\/20\/event-loop-explained\/' },
    'modified': '2019-04-10T21:22:12',
    'modified_gmt': '2019-04-10T18:22:12',
    'slug': 'event-loop-explained',
    'status': 'publish',
    'type': 'post',
    'link': 'http:\/\/vladsamoylov.com\/2018\/05\/20\/event-loop-explained\/',
    'title': { 'rendered': 'Event loop explained' },
    'content': {
        'rendered': '\n<p>Probably the&nbsp;most useful video about event loop for&nbsp;everyone sentenced to&nbsp;work with javascript. Especially surprising that these concepts are highly attention deprived, even though most of&nbsp;the&nbsp;javascript developers have to&nbsp;deal with them on&nbsp;a&nbsp;daily basis.<\/p>\n\n\n<p><iframe width="560" height="315" src="https:\/\/www.youtube-nocookie.com\/embed\/8aGhZQkoFbQ" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen><\/iframe><\/p>\n',
        'protected': false
    },
    'excerpt': {
        'rendered': '<p>Probably the&nbsp;most useful video about event loop for&nbsp;everyone sentenced to&nbsp;work with javascript. Especially surprising that these concepts are highly attention deprived, even though most of&nbsp;the&nbsp;javascript developers have to&nbsp;deal with them on&nbsp;a&nbsp;daily basis.<\/p>\n',
        'protected': false
    },
    'author': 1,
    'featured_media': 0,
    'comment_status': 'open',
    'ping_status': 'open',
    'sticky': false,
    'template': '',
    'format': 'standard',
    'meta': { 'spay_email': '' },
    'categories': [1],
    'tags': [5, 6],
    'jetpack_featured_media_url': '',
    'jetpack_shortlink': 'https:\/\/wp.me\/pad7ZF-12',
    '_links': {
        'self': [{ 'href': 'http:\/\/vladsamoylov.com\/wp-json\/wp\/v2\/posts\/64' }],
        'collection': [{ 'href': 'http:\/\/vladsamoylov.com\/wp-json\/wp\/v2\/posts' }],
        'about': [{ 'href': 'http:\/\/vladsamoylov.com\/wp-json\/wp\/v2\/types\/post' }],
        'author': [{ 'embeddable': true, 'href': 'http:\/\/vladsamoylov.com\/wp-json\/wp\/v2\/users\/1' }],
        'replies': [{ 'embeddable': true, 'href': 'http:\/\/vladsamoylov.com\/wp-json\/wp\/v2\/comments?post=64' }],
        'version-history': [{ 'count': 4, 'href': 'http:\/\/vladsamoylov.com\/wp-json\/wp\/v2\/posts\/64\/revisions' }],
        'predecessor-version': [{
            'id': 206,
            'href': 'http:\/\/vladsamoylov.com\/wp-json\/wp\/v2\/posts\/64\/revisions\/206'
        }],
        'wp:attachment': [{ 'href': 'http:\/\/vladsamoylov.com\/wp-json\/wp\/v2\/media?parent=64' }],
        'wp:term': [{
            'taxonomy': 'category',
            'embeddable': true,
            'href': 'http:\/\/vladsamoylov.com\/wp-json\/wp\/v2\/categories?post=64'
        }, {
            'taxonomy': 'post_tag',
            'embeddable': true,
            'href': 'http:\/\/vladsamoylov.com\/wp-json\/wp\/v2\/tags?post=64'
        }],
        'curies': [{ 'name': 'wp', 'href': 'https:\/\/api.w.org\/{rel}', 'templated': true }]
    }
}, {
    'id': 65,
    'date': '2017-09-12T15:43:00',
    'date_gmt': '2017-09-12T12:43:00',
    'guid': { 'rendered': 'http:\/\/blog.vladsamoylov.com\/2017\/09\/12\/swiss-knife-bot\/' },
    'modified': '2018-10-01T22:56:51',
    'modified_gmt': '2018-10-01T19:56:51',
    'slug': 'swiss-knife-bot',
    'status': 'publish',
    'type': 'post',
    'link': 'http:\/\/vladsamoylov.com\/2017\/09\/12\/swiss-knife-bot\/',
    'title': { 'rendered': 'Swiss knife bot' },
    'content': {
        'rendered': '\n<h3>Preamble<\/h3>\n\n\n\n<p>I\u2019m an\u00a0active Telegram user and\u00a0sometimes I find it frustrating and\u00a0unhandy to\u00a0do some routine stuff. And\u00a0not\u00a0so long ago I bethought myself that I\u2019m a\u00a0wannabe programmer and\u00a0it\u2019s my duty to\u00a0subdue a\u00a0machine and\u00a0make it do stuff that regular meatbag like me doesn\u2019t want to.\n<\/p>\n\n\n\n<figure class="wp-block-image"><img src="https:\/\/vladsamoylov.com\/\/pictures\/bender-moving-cubes.gif" alt=""\/><\/figure>\n\n\n\n<p>I also realised that I use my facebook links unshitter quite often and\u00a0hey, wouldn\u2019t it be nice if we were older to\u00a0have a\u00a0bot pinned to\u00a0top that does this and\u00a0other useful things.<\/p>\n\n\n\n<figure class="wp-block-image"><img src="https:\/\/vladsamoylov.com\/\/pictures\/bender-drinks.gif" alt=""\/><\/figure>\n\n\n\n<p>So I made it!<\/p>\n\n\n\n<p><a href="https:\/\/t.me\/swiss_knife_bot">There it is<\/a>!<\/p>\n\n\n\n<p><a href="https:\/\/github.com\/SomeVlad\/swiss-knife-bot">And\u00a0there is a\u00a0github repo<\/a>.<\/p>\n\n\n\n<p><a href="https:\/\/t.me\/vladsamoylov">And\u00a0here you can stay for\u00a0updates<\/a>.<\/p>\n\n\n\n<h3>What is this bot capable of?<\/h3>\n\n\n\n<p>For\u00a0now it can do these things:<\/p>\n\n\n\n<ul><li>convert shitty mobile facebook links into pretty parseable desktop ones;<\/li><li>convert youtube video to\u00a0mp3. Just send the\u00a0link;<\/li><li>in\u00a0addition to\u00a0unshitted m.fb link it parses (if the\u00a0link is of\u00a0specific type, but\u00a0I\u2019ll fix that eventually) given post (if it\u2019s public) and\u00a0creates telegra.ph page with its content (text only, actually).<\/li><\/ul>\n\n\n\n<figure class="wp-block-image"><img src="https:\/\/vladsamoylov.com\/\/pictures\/bender-dancing.gif" alt=""\/><\/figure>\n',
        'protected': false
    },
    'excerpt': {
        'rendered': '<p>Preamble I\u2019m an\u00a0active Telegram user and\u00a0sometimes I find it frustrating and\u00a0unhandy to\u00a0do some routine stuff. And\u00a0not\u00a0so long ago I bethought myself that I\u2019m a\u00a0wannabe programmer and\u00a0it\u2019s my duty to\u00a0subdue a\u00a0machine and\u00a0make it do stuff that regular meatbag like me doesn\u2019t want to. I also realised that I use my facebook links unshitter quite often and\u00a0hey, &hellip; <\/p>\n<p class="link-more"><a href="http:\/\/vladsamoylov.com\/2017\/09\/12\/swiss-knife-bot\/" class="more-link">Continue reading<span class="screen-reader-text"> &#8220;Swiss knife bot&#8221;<\/span><\/a><\/p>\n',
        'protected': false
    },
    'author': 1,
    'featured_media': 0,
    'comment_status': 'open',
    'ping_status': 'open',
    'sticky': false,
    'template': '',
    'format': 'standard',
    'meta': { 'spay_email': '' },
    'categories': [1],
    'tags': [10, 5, 9],
    'jetpack_featured_media_url': '',
    'jetpack_shortlink': 'https:\/\/wp.me\/pad7ZF-13',
    '_links': {
        'self': [{ 'href': 'http:\/\/vladsamoylov.com\/wp-json\/wp\/v2\/posts\/65' }],
        'collection': [{ 'href': 'http:\/\/vladsamoylov.com\/wp-json\/wp\/v2\/posts' }],
        'about': [{ 'href': 'http:\/\/vladsamoylov.com\/wp-json\/wp\/v2\/types\/post' }],
        'author': [{ 'embeddable': true, 'href': 'http:\/\/vladsamoylov.com\/wp-json\/wp\/v2\/users\/1' }],
        'replies': [{ 'embeddable': true, 'href': 'http:\/\/vladsamoylov.com\/wp-json\/wp\/v2\/comments?post=65' }],
        'version-history': [{ 'count': 3, 'href': 'http:\/\/vladsamoylov.com\/wp-json\/wp\/v2\/posts\/65\/revisions' }],
        'predecessor-version': [{
            'id': 129,
            'href': 'http:\/\/vladsamoylov.com\/wp-json\/wp\/v2\/posts\/65\/revisions\/129'
        }],
        'wp:attachment': [{ 'href': 'http:\/\/vladsamoylov.com\/wp-json\/wp\/v2\/media?parent=65' }],
        'wp:term': [{
            'taxonomy': 'category',
            'embeddable': true,
            'href': 'http:\/\/vladsamoylov.com\/wp-json\/wp\/v2\/categories?post=65'
        }, {
            'taxonomy': 'post_tag',
            'embeddable': true,
            'href': 'http:\/\/vladsamoylov.com\/wp-json\/wp\/v2\/tags?post=65'
        }],
        'curies': [{ 'name': 'wp', 'href': 'https:\/\/api.w.org\/{rel}', 'templated': true }]
    }
}, {
    'id': 67,
    'date': '2017-09-03T17:14:00',
    'date_gmt': '2017-09-03T14:14:00',
    'guid': { 'rendered': 'http:\/\/blog.vladsamoylov.com\/2017\/09\/03\/several-typical-js-tasks-pt-ii\/' },
    'modified': '2018-10-01T22:59:49',
    'modified_gmt': '2018-10-01T19:59:49',
    'slug': 'several-typical-js-tasks-pt-ii',
    'status': 'publish',
    'type': 'post',
    'link': 'http:\/\/vladsamoylov.com\/2017\/09\/03\/several-typical-js-tasks-pt-ii\/',
    'title': { 'rendered': 'Several typical js tasks\u00a0\u2013 pt. II' },
    'content': {
        'rendered': '\n<p>This is the\u00a0second part (first is <a href="\/2017\/07\/31\/several-typical-js-tasks-pt-i\/">here<\/a>) of\u00a0things \u201ceach frontender should know\u201d according to\u00a0<a href="https:\/\/performancejs.com\/post\/hde6d32\/The-Best-List-of-Frontend-JavaScript-Interview-Questions-(written-by-a-Frontend-Engineer)">this<\/a> topic.<\/p>\n\n\n\n<figure class="wp-block-image"><img src="https:\/\/vladsamoylov.com\/\/pictures\/more-answers.png" alt=""\/><\/figure>\n\n\n\n<h2>Implement the\u00a0following functions:<\/h2>\n\n\n\n<ul><li><em>\ufeffuniq<\/em>\u00a0\u2013 takes an\u00a0array of\u00a0numbers, and\u00a0returns the\u00a0unique numbers. Can you do it in\u00a0O(N) time?<\/li><\/ul>\n\n\n\n<pre class="wp-block-code language-js"><code>const uniq = array => Array.from(new Set(array))<\/code><\/pre>\n\n\n\n<ul><li><em>intersection<\/em>\u00a0\u2013 find the\u00a0intersection of\u00a0two arrays. Can you do it in\u00a0O(M+N) time (where M and\u00a0N are the\u00a0lengths of\u00a0the\u00a0two arrays)?<\/li><\/ul>\n\n\n\n<pre class="wp-block-code language-js"><code>const intersection = (firstArray, secondArray) => {\n     \/\/ first find \'uniq\' numbers in both arrays\n     const uniqFirst = uniq(firstArray)\n     const uniqSecond = uniq(secondArray)\n\n     \/\/ and return filtered array of elements found in both arrays\n     return uniqFirst.length &lt; uniqSecond.length ?\n         uniqFirst.filter(num => uniqSecond.includes(num)) :\n         uniqSecond.filter(num => uniqFirst.includes(num))\n }<\/code><\/pre>\n\n\n\n<ul><li><em>sort<\/em>\u00a0\u2013 implement the\u00a0<em>sort<\/em> function to\u00a0sort an\u00a0array of\u00a0numbers in\u00a0O(N\u00d7log(N)) time.<br\/>Just a\u00a0merge sort. I stole it. <a href="\/2017\/07\/20\/the-answer-to-the-ultimate-question\/">And\u00a0removed semicolons<\/a>.<\/li><\/ul>\n\n\n\n<pre class="wp-block-code language-js"><code>const sort = array => {\n     function merge(listR, listL) {\n         const output = []\n         while (listL.length &amp;&amp; listR.length) {\n             listL[0] &lt; listR[0] ? output.push(listL.shift()) : output.push(listR.shift())\n         }\n         return output.concat(listL).concat(listR)\n     }\n\n     if (array.length &lt; 2) {\n         return array;\n     }\n\n     const pivot = Math.floor(array.length \/ 2)\n     const listL = array.slice(0, pivot)\n     const listR = array.slice(pivot)\n\n     return merge(this.sort(listL), this.sort(listR))\n }<\/code><\/pre>\n\n\n\n<ul><li><em>includes<\/em>\u00a0\u2013 return <em>true<\/em> or\u00a0<em>false<\/em> indicating whether the\u00a0given number appears in\u00a0the\u00a0given sorted array. Can you do it in\u00a0O(log(N)) time?<br\/>\nLet\u2019s apply divide and\u00a0conquer paradigm.\n<ol><li>We can do dichotomous division of\u00a0an\u00a0initial array,<\/li><li>compare the\u00a0middle element with the\u00a0number we search for\u00a0and\u00a0then<\/li><li>repeat the\u00a0procedure with the\u00a0correct subarray.<br\/>\nBinary search basically.<\/li><\/ol>\n<\/li><\/ul>\n\n\n\n<pre class="wp-block-code language-js"><code>const includes = array => {\n     function merge(listR, listL) {\n         const output = []\n         while (listL.length &amp;&amp; listR.length) {\n             listL[0] &lt; listR[0] ? output.push(listL.shift()) : output.push(listR.shift())\n         }\n         return output.concat(listL).concat(listR)\n     }\n\n     if (array.length &lt; 2) {\n         return array;\n     }\n\n     const pivot = Math.floor(array.length \/ 2)\n     const listL = array.slice(0, pivot)\n     const listR = array.slice(pivot)\n\n     return merge(sort(listL), sort(listR))\n }<\/code><\/pre>\n\n\n\n<ul><li><em>assignDeep<\/em>\u00a0\u2013 like <em>Object.assign<\/em>, but\u00a0merges objects deeply. For\u00a0the\u00a0sake of\u00a0simplicity, you can assume that objects can contain only numbers and\u00a0other objects (and\u00a0not\u00a0arrays, functions, etc.).<\/li><\/ul>\n\n\n\n<pre class="wp-block-code language-js"><code>const assignDeep = (target, ...sources) => {\n     \/\/ check if nothing left to merge the target with\n     if (!sources.length) return target\n\n     \/\/ take first source from sources...\n     const source = sources.shift()\n\n     \/\/ ...and for each of its keys...\n     Object.keys(source).map(key => {\n         \/\/ ...if this key is an object...\n         if (isObject(source[key])) {\n             \/\/ ...put this key if there is no such key in the target object\n             \/\/ and merge these two objects deeply\n             if (!target[key]) Object.assign(target, {[key]: {}})\n             this.assignDeep(target[key], source[key])\n         \/\/ if this key is not an object\n         } else {\n             \/\/ just merge them the simple way\n             Object.assign(target, {[key]: source[key]})\n         }\n     })\n\n     \/\/ then repeat procedure with all the remaining sources\n     return this.assignDeep(target, ...sources)\n\n     function isObject(item) {\n         return (item &amp;&amp; typeof item === \'object\');\n     }\n }<\/code><\/pre>\n',
        'protected': false
    },
    'excerpt': {
        'rendered': '<p>This is the\u00a0second part (first is here) of\u00a0things \u201ceach frontender should know\u201d according to\u00a0this topic. Implement the\u00a0following functions: \ufeffuniq\u00a0\u2013 takes an\u00a0array of\u00a0numbers, and\u00a0returns the\u00a0unique numbers. Can you do it in\u00a0O(N) time? intersection\u00a0\u2013 find the\u00a0intersection of\u00a0two arrays. Can you do it in\u00a0O(M+N) time (where M and\u00a0N are the\u00a0lengths of\u00a0the\u00a0two arrays)? sort\u00a0\u2013 implement the\u00a0sort function to\u00a0sort an\u00a0array &hellip; <\/p>\n<p class="link-more"><a href="http:\/\/vladsamoylov.com\/2017\/09\/03\/several-typical-js-tasks-pt-ii\/" class="more-link">Continue reading<span class="screen-reader-text"> &#8220;Several typical js tasks\u00a0\u2013 pt. II&#8221;<\/span><\/a><\/p>\n',
        'protected': false
    },
    'author': 1,
    'featured_media': 0,
    'comment_status': 'open',
    'ping_status': 'open',
    'sticky': false,
    'template': '',
    'format': 'standard',
    'meta': { 'spay_email': '' },
    'categories': [1],
    'tags': [12, 5],
    'jetpack_featured_media_url': '',
    'jetpack_shortlink': 'https:\/\/wp.me\/pad7ZF-15',
    '_links': {
        'self': [{ 'href': 'http:\/\/vladsamoylov.com\/wp-json\/wp\/v2\/posts\/67' }],
        'collection': [{ 'href': 'http:\/\/vladsamoylov.com\/wp-json\/wp\/v2\/posts' }],
        'about': [{ 'href': 'http:\/\/vladsamoylov.com\/wp-json\/wp\/v2\/types\/post' }],
        'author': [{ 'embeddable': true, 'href': 'http:\/\/vladsamoylov.com\/wp-json\/wp\/v2\/users\/1' }],
        'replies': [{ 'embeddable': true, 'href': 'http:\/\/vladsamoylov.com\/wp-json\/wp\/v2\/comments?post=67' }],
        'version-history': [{ 'count': 8, 'href': 'http:\/\/vladsamoylov.com\/wp-json\/wp\/v2\/posts\/67\/revisions' }],
        'predecessor-version': [{
            'id': 133,
            'href': 'http:\/\/vladsamoylov.com\/wp-json\/wp\/v2\/posts\/67\/revisions\/133'
        }],
        'wp:attachment': [{ 'href': 'http:\/\/vladsamoylov.com\/wp-json\/wp\/v2\/media?parent=67' }],
        'wp:term': [{
            'taxonomy': 'category',
            'embeddable': true,
            'href': 'http:\/\/vladsamoylov.com\/wp-json\/wp\/v2\/categories?post=67'
        }, {
            'taxonomy': 'post_tag',
            'embeddable': true,
            'href': 'http:\/\/vladsamoylov.com\/wp-json\/wp\/v2\/tags?post=67'
        }],
        'curies': [{ 'name': 'wp', 'href': 'https:\/\/api.w.org\/{rel}', 'templated': true }]
    }
}, {
    'id': 69,
    'date': '2017-07-31T17:03:00',
    'date_gmt': '2017-07-31T14:03:00',
    'guid': { 'rendered': 'http:\/\/blog.vladsamoylov.com\/2017\/07\/31\/several-typical-js-tasks-pt-i\/' },
    'modified': '2018-10-01T22:36:41',
    'modified_gmt': '2018-10-01T19:36:41',
    'slug': 'several-typical-js-tasks-pt-i',
    'status': 'publish',
    'type': 'post',
    'link': 'http:\/\/vladsamoylov.com\/2017\/07\/31\/several-typical-js-tasks-pt-i\/',
    'title': { 'rendered': 'Several typical js tasks\u00a0\u2013 pt. I' },
    'content': {
        'rendered': '\n<p>Wandering around the\u00a0internet I\u2019ve stumbled upon another <a href="https:\/\/performancejs.com\/post\/hde6d32\/The-Best-List-of-Frontend-JavaScript-Interview-Questions-(written-by-a-Frontend-Engineer)\/">\u201clist of\u00a0things each frontender should know\u201d<\/a>. At\u00a0first I wanted to\u00a0write a\u00a0topic with my opinion on\u00a0such lists, but\u00a0then I decided not\u00a0to\u00a0do that, and\u00a0just complete the\u00a0coding tasks instead. Most of\u00a0them I\u2019ve already seen while passing interviews, and\u00a0I thought it would be handy to\u00a0have it all done at\u00a0once so I have my code samples on\u00a0hand.<\/p>\n\n\n\n<p>Let\u2019s go.<\/p>\n\n\n\n<h2>Implement the\u00a0following functions:<\/h2>\n\n\n\n<ul><li><em>isPrime<\/em>\u00a0\u2013 returns <em>true<\/em> or\u00a0<em>false<\/em>, indicating whether the\u00a0given number is prime.<\/li><\/ul>\n\n\n\n<pre class="wp-block-code language-js"><code>const isPrime = num => {\n     if (num > Number.MAX_SAFE_INTEGER) return new Error(\'Too big value\')\n\n     \/\/ all primes are of the form 6k \u00b1 1, with the exception of 2 and 3\n     \/\/ so we only need to test if n is divisible by 2 or 3\n     \/\/ then to check through all the numbers of form 6k \u00b1 1 &lt; \u221an\n     if (num &lt; 3) return num === 2\n     if (num % 2 === 0 || num % 3 === 0) return false\n\n     for (let i = 5; i * i &lt; num; i += 6) {\n         if (num % i === 0) return false\n     }\n     return true\n }<\/code><\/pre>\n\n\n\n<ul><li><em>factorial<\/em>\u00a0\u2013 returns a\u00a0number that is the\u00a0factorial of\u00a0the\u00a0given number.<\/li><\/ul>\n\n\n\n<pre class="wp-block-code language-js"><code>const factorial = num => num !== 1 ? num * this.factorial(num - 1) : 1<\/code><\/pre>\n\n\n\n<ul><li><em>fib<\/em>\u00a0\u2013 returns the\u00a0nth Fibonacci number.<\/li><\/ul>\n\n\n\n<pre class="wp-block-code language-js"><code>\/\/ with a simple memoization\nconst fib = num => {\n    if (!this.cache) this.cache = {}\n    if (!this.cache[num]) this.cache[num] = num &lt; 3 ? 1 : this.fib(num - 1) + this.fib(num - 2)\n    return this.cache[num]\n}<\/code><\/pre>\n\n\n\n<ul><li><em>isSorted<\/em>\u00a0\u2013 returns <em>true<\/em> or\u00a0<em>false<\/em>, indicating whether the\u00a0given array of\u00a0numbers is sorted.<\/li><\/ul>\n\n\n\n<pre class="wp-block-code language-js"><code>const isSorted = array => {\n    const length = array.length\n    if (length > 1) {\n        \/\/ "sorted" means ascending order, I guess\n        for (let i = 0; i &lt; length - 1; i++) {\n            if (array[i] > array[i + 1]) return false\n        }\n    }\n    return true\n}<\/code><\/pre>\n\n\n\n<ul><li><em>filter<\/em>\u00a0\u2013 implement the\u00a0filter function.<\/li><\/ul>\n\n\n\n<pre class="wp-block-code language-js"><code>const filter => (array, callback) => {\n    const newArray = []\n    for (let i of array) {\n        if (callback(i)) newArray.push(i)\n    }\n    return newArray\n}<\/code><\/pre>\n\n\n\n<ul><li><em>reduce<\/em>\u00a0\u2013 implement the\u00a0reduce function.<\/li><\/ul>\n\n\n\n<pre class="wp-block-code language-js"><code>const reduce = (array, callback, accumulator = 0) => {\n    if (array.length === 0) return accumulator\n\n    \/\/ if there is anything to reduce, pass the reduce function an array without first element,\n    \/\/ a callback, and new accumulator which is the result of a callback function with\n    \/\/ initial accumulator and a first element of an array\n    else return this.reduce(array.slice(1), callback, callback(accumulator, array[0]))\n}<\/code><\/pre>\n\n\n\n<ul><li><em>reverse<\/em>\u00a0\u2013 reverses the\u00a0given string (yes, using the\u00a0built in\u00a0<em>reverse<\/em> function is cheating).<\/li><\/ul>\n\n\n\n<pre class="wp-block-code language-js"><code>const reverse = str => Array.from(str).reduce((prev, curr) => curr + prev)<\/code><\/pre>\n\n\n\n<ul><li><em>indexOf<\/em>\u00a0\u2013 implement the\u00a0<em>indexOf<\/em> function for\u00a0arrays.<\/li><\/ul>\n\n\n\n<pre class="wp-block-code language-js"><code>const indexOf = (array, elementToFind) => {\n    for (let i = 0; i &lt; array.length; i++) {\n        if (array[i] === elementToFind) return i\n    }\n    return -1\n}<\/code><\/pre>\n\n\n\n<ul><li><em>isPalindrome<\/em>\u00a0\u2013 return <em>true<\/em> or\u00a0<em>false<\/em> indicating whether the\u00a0given string is a\u00a0palindrome (case and\u00a0space insensitive).<\/li><\/ul>\n\n\n\n<pre class="wp-block-code language-js"><code>const isPalindrome = str => {\n    const formattedString = str.toLowerCase().replace(\/s\/g, \'\')\n    return formattedString === Array.from(formattedString).reverse().join(\'\')\n}<\/code><\/pre>\n\n\n\n<ul><li><em>missing<\/em>\u00a0\u2013 takes an\u00a0unsorted array of\u00a0unique numbers (ie. no\u00a0repeats) from <em>1<\/em> through some number <em>n<\/em>, and\u00a0returns the\u00a0missing number in\u00a0the\u00a0sequence (there are either no\u00a0missing numbers, or\u00a0exactly one missing number). Can you do it in\u00a0O(N) time? Hint: There\u2019s a\u00a0clever formula you can use.<\/li><\/ul>\n\n\n\n<pre class="wp-block-code language-js"><code>const missing = array => {\n        const sum1toN = n => n * (n + 1) \/ 2\n        const arraySum = array.reduce((prev, curr) => prev + curr)\n        return sum1toN(array.length) === arraySum ? false : sum1toN(array.length + 1) - arraySum\n}<\/code><\/pre>\n\n\n\n<ul><li><em>isBalanced<\/em>\u00a0\u2013 takes a\u00a0string and\u00a0returns <em>true<\/em> or\u00a0<em>false<\/em> indicating whether its curly braces are balanced.<br\/>I will take it one step further: for\u00a0, [] and\u00a0().<\/li><\/ul>\n\n\n\n<pre class="wp-block-code language-js"><code>const isBalanced = str => {\n    str = str.replace(\/[^(){}[]]+\/g, \'\')\n    const conformity = {\n        \'(\': \')\',\n        \'{\': \'}\',\n        \'[\': \']\'\n    }\n\n    if (str.length === 0) return true\n    if (str.length % 2 !== 0) return false\n    const stack = []\n\n    for (let i = 0; i &lt; str.length; i++) {\n        \/\/ if a char is an opening bracket\n        if (str[i] in conformity) {\n            \/\/ then put it into stack\n            stack.push(str[i])\n        }\n        \/\/ if a char is a closing bracket\n        \/\/ then pull the last opening bracket\n        \/\/ and check if it\'s corresponding to the current char\n        else if (conformity[stack.pop()] !== str[i]) return false\n    }\n\n    \/\/ stack is empty \u2013 all good\n    \/\/ and vice versa\n    return stack.length === 0\n}<\/code><\/pre>\n\n\n\n<hr class="wp-block-separator"\/>\n\n\n\n<p>More complicated tasks are coming up.<\/p>\n',
        'protected': false
    },
    'excerpt': {
        'rendered': '<p>Wandering around the\u00a0internet I\u2019ve stumbled upon another \u201clist of\u00a0things each frontender should know\u201d. At\u00a0first I wanted to\u00a0write a\u00a0topic with my opinion on\u00a0such lists, but\u00a0then I decided not\u00a0to\u00a0do that, and\u00a0just complete the\u00a0coding tasks instead. Most of\u00a0them I\u2019ve already seen while passing interviews, and\u00a0I thought it would be handy to\u00a0have it all done at\u00a0once so I have &hellip; <\/p>\n<p class="link-more"><a href="http:\/\/vladsamoylov.com\/2017\/07\/31\/several-typical-js-tasks-pt-i\/" class="more-link">Continue reading<span class="screen-reader-text"> &#8220;Several typical js tasks\u00a0\u2013 pt. I&#8221;<\/span><\/a><\/p>\n',
        'protected': false
    },
    'author': 1,
    'featured_media': 0,
    'comment_status': 'open',
    'ping_status': 'open',
    'sticky': false,
    'template': '',
    'format': 'standard',
    'meta': { 'spay_email': '' },
    'categories': [1],
    'tags': [12, 5],
    'jetpack_featured_media_url': '',
    'jetpack_shortlink': 'https:\/\/wp.me\/pad7ZF-17',
    '_links': {
        'self': [{ 'href': 'http:\/\/vladsamoylov.com\/wp-json\/wp\/v2\/posts\/69' }],
        'collection': [{ 'href': 'http:\/\/vladsamoylov.com\/wp-json\/wp\/v2\/posts' }],
        'about': [{ 'href': 'http:\/\/vladsamoylov.com\/wp-json\/wp\/v2\/types\/post' }],
        'author': [{ 'embeddable': true, 'href': 'http:\/\/vladsamoylov.com\/wp-json\/wp\/v2\/users\/1' }],
        'replies': [{ 'embeddable': true, 'href': 'http:\/\/vladsamoylov.com\/wp-json\/wp\/v2\/comments?post=69' }],
        'version-history': [{ 'count': 1, 'href': 'http:\/\/vladsamoylov.com\/wp-json\/wp\/v2\/posts\/69\/revisions' }],
        'predecessor-version': [{
            'id': 120,
            'href': 'http:\/\/vladsamoylov.com\/wp-json\/wp\/v2\/posts\/69\/revisions\/120'
        }],
        'wp:attachment': [{ 'href': 'http:\/\/vladsamoylov.com\/wp-json\/wp\/v2\/media?parent=69' }],
        'wp:term': [{
            'taxonomy': 'category',
            'embeddable': true,
            'href': 'http:\/\/vladsamoylov.com\/wp-json\/wp\/v2\/categories?post=69'
        }, {
            'taxonomy': 'post_tag',
            'embeddable': true,
            'href': 'http:\/\/vladsamoylov.com\/wp-json\/wp\/v2\/tags?post=69'
        }],
        'curies': [{ 'name': 'wp', 'href': 'https:\/\/api.w.org\/{rel}', 'templated': true }]
    }
}]
