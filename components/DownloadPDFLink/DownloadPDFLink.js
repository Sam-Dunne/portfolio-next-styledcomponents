import { PDFLinkWrapper, DownloadPDF } from './DownloadPDFLink.elements'


const DownloadPDFLink = ({ }) => {
    return (
        <PDFLinkWrapper>
            <DownloadPDF href="/SamD_Speak_ Resume_2022-07.pdf" download="Sam Dunne Resume">Download Resume</DownloadPDF>
        </PDFLinkWrapper>
    )
}

export default DownloadPDFLink;