import MockServer from "sap/ui/core/util/MockServer";
// import UriParameters from "sap/base/util/UriParameters";

export default class mockserver {
  static init(): void {
    // create
    const oMockServer = new MockServer({
      rootUri: "/api/",
    });

    // simulate against the metadata and mock data
    oMockServer.simulate("../localService/metadata.xml", {
      sMockdataBaseUrl: "../localService/mockdata",
      bGenerateMissingMockData: true,
    });

    // start
    oMockServer.start();

    // Log.info("Running the app with mock data");
  }
}
