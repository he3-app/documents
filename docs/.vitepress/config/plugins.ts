import { basename, resolve } from 'path';
import fs from 'fs';
import tooltip from '../plugins/tooltip';
import mdContainer from 'markdown-it-container';
import { highlight } from '../utils/highlight';
import { docRoot } from '../utils/message';

export const mdPlugin = (md) => {
  md.use(tooltip);
  md.use(mdContainer, 'demo', {
    validate(params) {
      return !!params.trim().match(/^demo\s*(.*)$/);
    },

    render(tokens, idx) {
      const m = tokens[idx].info.trim().match(/^demo\s*(.*)$/);
      if (tokens[idx].nesting === 1 /* means the tag is opening */) {
        const description = m && m.length > 1 ? m[1] : '';
        const sourceFileToken = tokens[idx + 2];
        let source = '';
        const sourceFile = sourceFileToken.children?.[0].content ?? '';
        if (sourceFileToken.type === 'inline') {
          source = fs.readFileSync(
            resolve(__dirname, '../../demos', `${sourceFile}.vue`),
            'utf-8'
          );
        }
        if (!source) throw new Error(`Incorrect source file: ${sourceFile}`);
        return `<Demo source="${encodeURIComponent(
          highlight(source, 'vue')
        )}" path="${sourceFile}" raw-source="${encodeURIComponent(
          source
        )}" description="${encodeURIComponent(description)}">`;
      } else {
        return '</Demo>';
      }
    },
  });
};
