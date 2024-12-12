class ViewSDKClient {
    readyPromise: Promise<void>;
    adobeDCView: any;
    constructor() {
        this.readyPromise = new Promise((resolve) => {
            if (window['AdobeDC']) {
                resolve();
            } else {
                document.addEventListener("adobe_dc_view_sdk.ready", () => {
                    resolve();
                });
            }
        });
        this.adobeDCView = undefined;
    }

    ready() {
        return this.readyPromise;
    }

    previewFile(fileLocation: string, fileName: string) {
        console.log(process.env)
        const config = {
            clientId: '0bcb77bc143f46079751a76ce9a18447',
        };
        this.adobeDCView = new window['AdobeDC'].View(config); // This clusterfuck throws ENOENT errors, but it works
        const previewFilePromise = this.adobeDCView.previewFile(
            {
                content: {
                    location: {
                        url: fileLocation
                    },
                },
                metaData: { fileName }
            },
            {
                embedMode: 'LIGHT_BOX'
            }
        );
        return previewFilePromise;
    }
}

export default ViewSDKClient;