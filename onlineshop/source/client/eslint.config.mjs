import { fixupConfigRules, fixupPluginRules } from "@eslint/compat";
import typescriptEslint from "@typescript-eslint/eslint-plugin";
import prettier from "eslint-plugin-prettier";
import _import from "eslint-plugin-import";
import globals from "globals";
import tsParser from "@typescript-eslint/parser";
import path from "node:path";
import { fileURLToPath } from "node:url";
import js from "@eslint/js";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const compat = new FlatCompat({
    baseDirectory: __dirname,
    recommendedConfig: js.configs.recommended,
    allConfig: js.configs.all
});

export default [{
    ignores: ["**/.eslintrc.js", "**/react-app-env.d.ts"],
}, ...fixupConfigRules(compat.extends(
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:import/errors",
    "plugin:import/warnings",
    "plugin:import/typescript",
    "plugin:prettier/recommended",
)), {
    plugins: {
        "@typescript-eslint": fixupPluginRules(typescriptEslint),
        prettier: fixupPluginRules(prettier),
        import: fixupPluginRules(_import),
    },

    languageOptions: {
        globals: {
            ...globals.browser,
        },

        parser: tsParser,
        ecmaVersion: 12,
        sourceType: "module",

        parserOptions: {
            ecmaFeatures: {
                jsx: true,
            },
        },
    },

    settings: {
        "import/resolver": {
            node: {
                extensions: [".js", ".jsx", ".ts", ".tsx"],
                moduleDirectory: ["node_modules", "."],
            },
        },
    },

    rules: {
        "no-param-reassign": ["error"],

        "prettier/prettier": ["error", {
            endOfLine: "auto",
        }],

        "linebreak-style": 0,

        "arrow-body-style": ["error", "as-needed", {
            requireReturnForObjectLiteral: false,
        }],

        curly: ["error", "all"],
        "no-implicit-coercion": ["error"],
        "spaced-comment": ["error", "always"],
        eqeqeq: ["error", "always"],
        "prefer-template": "error",
        "no-useless-concat": "error",

        "prefer-destructuring": ["error", {
            VariableDeclarator: {
                array: false,
                object: true,
            },

            AssignmentExpression: {
                array: false,
                object: true,
            },
        }, {
            enforceForRenamedProperties: false,
        }],

        "import/extensions": ["error", "ignorePackages", {
            ts: "never",
            tsx: "never",
        }],

        "import/no-extraneous-dependencies": ["error", {
            devDependencies: true,
        }],

        "import/order": ["error", {
            "newlines-between": "always",
            groups: ["builtin", "external", "parent", "sibling", "index"],

            pathGroups: [{
                pattern: "src/**",
                group: "parent",
                position: "after",
            }],
        }],

        "import/newline-after-import": "error",
        "@typescript-eslint/no-explicit-any": "error",
        "@typescript-eslint/explicit-function-return-type": "off",
        "@typescript-eslint/explicit-module-boundary-types": "off",
        "@typescript-eslint/no-empty-object-type": ["error"],
        "@typescript-eslint/no-unsafe-function-type": ["error"],
        "@typescript-eslint/no-wrapper-object-types": ["error"],
        "@typescript-eslint/no-shadow": ["error"],

        "@typescript-eslint/naming-convention": ["error", {
            selector: "default",
            format: ["camelCase"],
        }, {
            selector: ["memberLike"],
            modifiers: ["private"],
            format: ["camelCase"],
            leadingUnderscore: "allow",
        }, {
            selector: ["enumMember", "variable"],
            format: ["camelCase", "PascalCase", "UPPER_CASE"],
        }, {
            selector: "parameter",
            format: ["camelCase"],
            leadingUnderscore: "allow",
            modifiers: ["unused"],
        }, {
            selector: "objectLiteralProperty",

            filter: {
                regex: "^[a-z]([a-z0-9-]+)?(__([a-z0-9]+-?)+)?(--([a-z0-9]+-?)+){0,2}$",
                match: true,
            },

            format: null,
        }, {
            selector: "typeLike",
            format: ["PascalCase"],
        }, {
            selector: "typeProperty",
            format: ["snake_case", "camelCase"],
        }],
    },
}];