import { exec } from 'child_process';
import { getArg } from '../helper/cli-helper';
import fs from 'fs';
import rimraf from "rimraf";

rimraf(".lighthouseci", function () { console.log("Removed .lighthouseci"); });
rimraf(".lighthousereport", function () { console.log("Removed .lighthousereport"); });

const url = getArg("url");
const iterations = getArg("iterations")??5;

exec(`lhci collect --url ${url} -n ${iterations}`, (err, stdout, stderr) => {
  console.log(stdout);
  
  exec(`lhci upload --target filesystem --outputDir .lighthousereport`, (err, stdout, stderr) => {
    console.log(stdout);

    const lhciManifest = require('../.lighthousereport/manifest.json');
    const medianEntry = lhciManifest.find(entry => entry.isRepresentativeRun)
    const medianResult = JSON.parse(fs.readFileSync(medianEntry.jsonPath, 'utf-8'));
    console.log(`Median performance score was ${medianResult.categories.performance.score * 100}%`);
  });

});

