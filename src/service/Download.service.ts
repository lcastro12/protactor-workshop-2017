import { readFileSync, existsSync, mkdirSync, writeFileSync } from 'fs';
import { resolve } from 'path';
import * as fetch from 'node-fetch';

export class DownloadService {
 path =  `${__dirname}/../../../temp`;
  public async downloadFile(link: string, filename): Promise<void> {

    if (!existsSync(this.path)) {
      mkdirSync(this.path);
    }
    const file = fetch(link).then((response: any) => response.buffer());
    writeFileSync(resolve(this.path, filename), file);
  }

  public readFileFromTemp(filename: string): Buffer {
    return readFileSync(resolve(this.path, filename));
  }
}
