{
  pkgs ? import <nixpkgs> { },
}:

pkgs.mkShell {
  packages = with pkgs; [
    nixfmt
    prettier
    poppler-utils
    libxml2
  ];
}
