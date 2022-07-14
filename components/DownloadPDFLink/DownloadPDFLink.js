import { PDFLinkWrapper, DownloadPDF } from './DownloadPDFLink.elements'


const DownloadPDFLink = ({ }) => {
    return (
        <PDFLinkWrapper>
            <DownloadPDF href="/2022-07-12 Sam Dunne WebDev Resume.pdf" download="Sam Dunne Resume">Download Resume</DownloadPDF>
        </PDFLinkWrapper>
    )
}

export default DownloadPDFLink;