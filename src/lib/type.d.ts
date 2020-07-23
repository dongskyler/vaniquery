export as namespace vq;

export interface IfcArgv {
  _: string[];
  c?: boolean;
  cache?: boolean;
  C?: boolean;
  'no-cache'?: boolean;
  noCache?: boolean;
  v?: boolean;
  verbose?: boolean;
  $0: string;
}

export interface IfcEquivalentsLibEntry {
  name: string;
  jquery: RegExp;
  vanilla: string;
}
