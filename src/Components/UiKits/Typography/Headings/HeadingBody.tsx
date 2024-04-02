import { H1, H2, H3, H4, H5, H6 } from "../../../../AbstractElements";
import { Heading1MEGA, Heading2XL, Heading3LARGE, Heading4MEDIUM, Heading5SMALL, Heading6, h1, h2, h3, h4, h5, h6, rem1, rem125, rem15, rem175, rem2, rem25 } from "../../../../Utils/Constants";

export default function HeadingBody() {
    return (
        <tbody>
            <tr>
                <td><code>{h1}</code></td>
                <td><H1 className="mb-0">{rem25}</H1></td>
                <td><H1><span>{Heading1MEGA}</span></H1></td>
            </tr>
            <tr>
                <td><code>{h2}</code></td>
                <td><H2 className="mb-0">{rem2}</H2></td>
                <td><H2><span> {Heading2XL}</span></H2></td>
            </tr>
            <tr>
                <td><code>{h3}</code></td>
                <td><H3 className="mb-0">{rem175}</H3></td>
                <td><H3><span> {Heading3LARGE}</span></H3></td>
            </tr>
            <tr>
                <td><code>{h4}</code></td>
                <td><H4 className="mb-0">{rem15}</H4></td>
                <td><H4><span> {Heading4MEDIUM}</span></H4></td>
            </tr>
            <tr>
                <td><code>{h5}</code></td>
                <td><H5 className="mb-0">{rem125}</H5></td>
                <td><H5><span> {Heading5SMALL}</span></H5></td>
            </tr>
            <tr>
                <td className="pb-0"><code>{h6}</code></td>
                <td className="pb-0"><H6 className="mb-0">{rem1}</H6></td>
                <td className="pb-0"><H5><span>{Heading6}</span></H5></td>
            </tr>
        </tbody>
    )
}