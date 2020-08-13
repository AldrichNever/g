import { expect } from 'chai';
import { Event, AbstractCanvas, AbstractGroup, AbstractShape, Base, version } from '../../src/index';
import { version as PkgVersion } from '../../package.json';

describe('Canvas index', () => {
  it('Event', () => {
    expect(Event).not.eql(undefined);
  });

  it('Base', () => {
    expect(Base).not.eql(undefined);
  });

  it('AbstractCanvas', () => {
    expect(AbstractCanvas).not.eql(undefined);
  });

  it('AbstractGroup', () => {
    expect(AbstractGroup).not.eql(undefined);
  });

  it('AbstractShape', () => {
    expect(AbstractShape).not.eql(undefined);
  });

  it('version', () => {
    expect(version).eql(PkgVersion);
  });
});
