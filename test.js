const expect = require("chai").expect;
const chai = require("chai");
const path = require("path");
const m = require(".");
const rimraf = require("rimraf");
const fs = require("fs");



describe("podcast-downloader", async function () {
    this.timeout(1000000);
    rimraf.sync("testfolder");
    fs.mkdirSync("testfolder");

    it("Downloading 1 podcast", async function () {
        let cast = await m("https://collegeinfogeek.com/podcast", "testfolder",1);
        expect(cast).to.be.an("array");
        expect(cast.length).to.be.equal(1)
        let result = fs.readdirSync("testfolder");
        expect(result[0]).to.be.ok
        rimraf.sync("testfolder");
        fs.mkdirSync("testfolder");
    });

    it("Downloading 2 podcasts", async function () {
        let cast = await m("https://collegeinfogeek.com/podcast", "testfolder",2);
        expect(cast).to.be.an("array");
        expect(cast.length).to.be.equal(2)
        let result = fs.readdirSync("testfolder");
        expect(result[0]).to.be.ok
        expect(result[1]).to.be.ok

        rimraf.sync("testfolder");
        fs.mkdirSync("testfolder");
    });

});