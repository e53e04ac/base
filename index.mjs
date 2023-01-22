/*!
    @e53e04ac/base/index.mjs
    Copyright (C) @e53e04ac
    MIT License
*/

import { randomUUID as cryptoRandomUUID } from 'node:crypto';

import { hold } from 'hold';
import { unwrap } from 'hold';

/** @type {import('./index').Base.Constructor} */
const constructor = ((options) => {

    const _options = ({
        tags: hold(() => {
            return unwrap(options.tags) ?? {};
        }),
    });

    /** @type {import('./index').Base._Self} */
    const _self = ({
        options: (() => {
            return options;
        }),
        _options: (() => {
            return _options;
        }),
        createDate: hold(() => {
            return new Date();
        }),
        uuid: hold(() => {
            return cryptoRandomUUID({
                disableEntropyCache: true,
            });
        }),
        tags: hold(() => {
            return _options.tags();
        }),
    });

    /** @type {import('./index').Base.Self} */
    const self = ({
        _Base: (() => {
            return _self;
        }),
    });

    _self.createDate();
    _self.uuid();

    return self;

});

/** @type {import('./index').Base.Companion} */
const companion = ({});

/** @type {import('./index').Base.ConstructorWithCompanion} */
const constructorWithCompanion = Object.assign(constructor, companion);

export { constructorWithCompanion as Base };
