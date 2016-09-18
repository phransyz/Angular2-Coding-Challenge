/* tslint:disable:no-unused-variable */

import { By }           from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { addProviders, async, inject } from '@angular/core/testing';
import { MovieComponent } from './movie.component';

describe('Component: Movie', () => {
  it('should create an instance', () => {
    let component = new MovieComponent();
    expect(component).toBeTruthy();
  });
});
