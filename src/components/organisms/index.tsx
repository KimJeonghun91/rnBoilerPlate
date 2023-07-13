/**
 * 비즈니스 로직이 없는 UI만으로 이루어진 organisms 입니다.
organisms는 2개 이상의 아톰 혹은 molecules의 결합체입니다.
만약 비즈니스 로직이 포함된다면 templates으로 이동해야 합니다.
---> templates 삭제
 * @module Organisms
*/
export { default as CustomHeader } from './CustomHeader';
export { default as CardView } from './CardView';
export { default as InfoView } from './InfoView';
