import type { OrderedSXResolved, StyledValueResolvedWithMeta } from './types';
import { Cssify } from './utils/cssify';
import { stableHash } from './stableHash';

function getCSSIdAndRuleset(
  styleValueResolvedWithMeta: StyledValueResolvedWithMeta,
  objectHash: string,
  prefixClassName: string = ''
  // path: Path
) {
  const toBeInjectedStyle: {
    style: any;
    condition?: any;
    colorMode?: any;
  } = { style: styleValueResolvedWithMeta.resolved };
  if (
    styleValueResolvedWithMeta.meta.queryCondition &&
    styleValueResolvedWithMeta.meta.colorMode
  ) {
    toBeInjectedStyle.condition =
      styleValueResolvedWithMeta.meta.queryCondition;
    toBeInjectedStyle.colorMode = styleValueResolvedWithMeta.meta.colorMode;
  } else if (styleValueResolvedWithMeta.meta.queryCondition) {
    toBeInjectedStyle.condition =
      styleValueResolvedWithMeta.meta.queryCondition;
  } else if (styleValueResolvedWithMeta.meta.colorMode) {
    toBeInjectedStyle.colorMode = styleValueResolvedWithMeta.meta.colorMode;
  }

  //@ts-ignore
  const cssObject = Cssify.create(
    { style: toBeInjectedStyle },
    // 'helloworld'
    objectHash +
      '-' +
      stableHash({
        path: styleValueResolvedWithMeta?.meta?.path,
        data: styleValueResolvedWithMeta.original,
      }),
    prefixClassName
  );

  // var hr = stableHash({ hello: 'helloworld' });

  // console.log(
  //   toBeInjectedStyle,
  //   stableHash(toBeInjectedStyle),
  //   'consistant hash @@@@'
  // );
  return cssObject;
}

export function INTERNAL_updateCSSStyleInOrderedResolved(
  orderedSXResolved: OrderedSXResolved,
  objectHash: string,
  keepOriginal: boolean = false,
  prefixClassName = ''
) {
  orderedSXResolved.forEach((styleResolved: StyledValueResolvedWithMeta) => {
    const cssData: any = getCSSIdAndRuleset(
      styleResolved,
      objectHash,
      prefixClassName
    );

    if (!keepOriginal) {
      delete styleResolved.resolved;
      delete styleResolved.original;
    }
    // console.log(styleResolved, 'CSS DATA');
    styleResolved.meta.cssId = cssData.ids.style;
    styleResolved.meta.cssRuleset = cssData.rules.style;
  });
}
