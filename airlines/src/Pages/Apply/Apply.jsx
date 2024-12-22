import React from "react";

export default function Apply() {
  return (
    <div>
      <form class="row g-3">
        <label for="inputAddress" class="form-label">
          Full Name
        </label>
        <div class="col">
          <input
            type="text"
            class="form-control"
            placeholder="First name"
            aria-label="First name"
          />
        </div>
        <div class="col">
          <input
            type="text"
            class="form-control"
            placeholder="Last name"
            aria-label="Last name"
          />
        </div>
        <div class="col-12">
          <label for="inputAddress" class="form-label">
            Email ID
          </label>
          <input
            type="text"
            class="form-control"
            id="inputAddress"
            placeholder="example@gmail.com"
          />
        </div>
        <div class="col-md-6">
          <label for="inputPassword4" class="form-label">
            Contact No
          </label>
          <input
            type="password"
            class="form-control"
            id="inputPassword4"
            placeholder="000-000-0000"
          />
        </div>

        <div class="col-12">
          <label for="inputAddress2" class="form-label">
            Last Qualifications
          </label>
          <input
            type="text"
            class="form-control"
            id="inputAddress2"
            placeholder="8th 10th 12th  Graduation..."
          />
        </div>

        <div class="col-md-4">
          <label for="inputState" class="form-label">
            State
          </label>
          <select id="inputState" class="form-select">
            <option selected>Choose...</option>
            <option>Kolkata</option>
          </select>
        </div>
        <div class="col-md-6">
          <label for="inputCity" class="form-label">
            City
          </label>
          <input
            type="text"
            class="form-control"
            id="inputCity"
            placeholder="Enter your nearest airport city name"
          />
        </div>
        <div class="col-md-4">
          <label for="inputState" class="form-label">
            Passport
          </label>
          <select id="inputState" class="form-select">
            <option selected>Choose...</option>
            <option>Yes</option>
            <option>No</option>
            <option>Apply</option>
          </select>
        </div>
        <div class="col-12">
          <div class="form-check">
            <input class="form-check-input" type="checkbox" id="gridCheck" />
            <label class="form-check-label" for="gridCheck">
              Check me out
            </label>
          </div>
        </div>
        <div class="col-12">
          <button type="submit" class="btn btn-primary">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}
